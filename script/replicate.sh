#!/bin/sh

# Dieses Skript laedt regelmaessig Updates vom OSM-Server und spielt
# sie in die Datenbank ein. Es kann beliebig oft aufgerufen werden.

# Das Skript kann unter einer beliebigen Benutzerkennung laufen, die 
# das Recht zum (Schreib)Zugriff auf den u.g. BASE-Pfad hat und ausserdem
# das Recht, den rake-Task zum Datenbank-Update aufzurufen.

# Das Skript loggt per Syslog in die "local1"-Facility; ausserdem werden
# die Ausgaben der aufgerufenen Programme in Dateien umgeleitet, falls
# man mal was nachschauen muss.

# hier werden unsere Arbeitsdateien abgelegt.
BASE=/Users/christoph/Projects/wheelmap/tmp

# hier ist Osmosis
OSMOSIS=/Users/christoph/Projects/wheelmap/bin/osmosis

# hier muss der rake-Task aufgerufen werden
RAILSAPP=/Users/christoph/Projects/wheelmap

# Alles ab hier muss vermutlich nicht geaendert werden
# ------------------------------------------------------------------------

# sicherstellen, dass es ein $BASE/var gibt
mkdir -p $BASE/var

# ist Osmosis richtig eingerichtet?
if [ ! -f $BASE/osmosis-working-dir/state.txt ]
then
    echo "Osmosis nicht eingerichtet!"
    exit 1
fi

LOCKFILE=$BASE/var/replicate.lock
TIMESTAMPFILE=$BASE/var/last-update

# Schauen, ob Lockfile existiert (und der darin genannte Prozess),
# wenn ja, abbrechen

if [ -f $LOCKFILE ] 
then
   OTHERPID=`cat $LOCKFILE`
   if kill -0 $OTHERPID 2>/dev/null
   then
      # anderer Prozess laeuft noch
      logger -p local1.info "osm-replicate ($$): other process ($OTHERPID) active"
      exit 1
   fi
fi

# Logfile anlegen

echo $$ > $LOCKFILE

logger -p local1.info "osm-replicate ($$): start update"

START=`date +%s`
THISFILE=$BASE/var/replicate-$START.osc
MERGEDFILE=$BASE/var/merged.osc

# Backup der Osmosis-Status-Datei machen

if cp $BASE/osmosis-working-dir/state.txt $BASE/var/state.old 
then
   :
else
   logger -p local1.err "osm-replicate ($$): cannot make backup copy of state.txt"
   rm $LOCKFILE
   exit 1
fi

# alte OSC-Dateien loeschen

find $BASE/var/ -name replicate-\*.osc -mtime +0 | xargs rm -f

mv $BASE/var/osmosis-rri.stderr $BASE/var/osmosis-rri.stderr.old 2>/dev/null
$OSMOSIS/bin/osmosis --rri workingDirectory=$BASE/osmosis-working-dir/ --simc --wxc $THISFILE 2>$BASE/var/osmosis-rri.stderr

if [ ! -f $THISFILE ]
then
   logger -p local1.err "osm-replicate ($$): osmosis rri error"
   cp $BASE/var/state.old $BASE/osmosis-working-dir/state.txt
   rm $LOCKFILE
   exit 1
fi

if [ -f $MERGEDFILE ]
then

   # etwas ist vom letzten Mal uebrig geblieben (Import in MySQL ging schief?)
   # wir kombinieren das jetzt heruntergeladene mit dem alten.

   logger -p local1.info "osm-replicate ($$): merging with existing diff"
   mv $BASE/var/osmosis-mc.stderr $BASE/var/osmosis-mc.stderr.old 2>/dev/null
   if $OSMOSIS/bin/osmosis --read-xml-change-0.6 $MERGEDFILE --sort-change-0.6 --read-xml-change-0.6 $THISFILE --sort-change-0.6 --merge-change-0.6 --wxc $MERGEDFILE.new 2>$BASE/var/osmosis-mc.stderr
   then
      mv $MERGEDFILE.new $MERGEDFILE
   else
      logger -p local1.err "osm-replicate ($$): osmosis mc error"
      cp $BASE/var/state.old $BASE/osmosis-working-dir/state.txt
      rm $LOCKFILE
      exit 1
   fi

else

   # nichts uebrig vom letzten Mal; das jetzt heruntergeladene ist alles,
   # was wir importieren muessen
   cp $THISFILE $MERGEDFILE

fi

# Jetzt kommt der "rake"-Aufruf zum Import der Daten

mv $BASE/var/rake.stderr $BASE/var/rake.stderr.old 2>/dev/null
cd $RAILSAPP
if cat $MERGEDFILE | rake osm:import > $BASE/var/rake.stdout 2> $BASE/var/rake.stderr
then
   rm $MERGEDFILE
else
   logger -p local1.err "osm-replicate ($$): error in rake osm:import_planet - see $BASE/var/rake.stderr"
   rm $LOCKFILE
   exit 1
fi

END=`date +%s`
LAST=0`cat $TIMESTAMPFILE 2> /dev/null`
echo $START > $TIMESTAMPFILE
logger -p local1.info "osm-replicate ($$): took `expr $END - $START` seconds to process changes of `expr $START - $LAST` seconds"

rm $LOCKFILE
