#!/bin/bash

find -name "* *" -type f | rename 's/ /_/g'

for i in Abkhazia_1152720.poly Albania_53292.poly Andorra_9407.poly Austria_16239.poly Belarus_59065.poly Belgium_52411.poly Bosnia_and_Herzegovina_2528142.poly Bulgaria_186382.poly Croatia_214885.poly Cyprus_307787.poly Czech_Republic_51684.poly Denmark_50046.poly Estonia_79510.poly Faroe_Islands_52939.poly Finland_54224.poly France_1403916.poly Germany_51477.poly Greece_192307.poly Hungary_21335.poly Iceland_299133.poly Ireland_62273.poly Isle_of_Man_62269.poly Italy_365331.poly Latvia_72594.poly Liechtenstein_1155955.poly Lithuania_72596.poly Luxemburg_2171347.poly Macedonia_53293.poly Malta_365307.poly Moldova_58974.poly Monaco_36990.poly Montenegro_53296.poly Norway_1059668.poly Poland_49715.poly Republic_of_Kosovo_2088990.poly Romania_90689.poly San_Marino_54624.poly Serbia_1741311.poly Slovakia_14296.poly Slovenia_218657.poly Sweden_52822.poly Switzerland_51701.poly Turkey_174737.poly Ukraine_60199.poly United_Kingdom_62149.poly Vatican_City_36989.poly;
do
  points=`wc -l  $i | cut -f1 -d " "`
  if [ $points -lt 20000 ]
  then
    echo "SMALL REGION WITH LESS THAN 20.000 POINTS"
    /var/apps/wheelmap/production/current/script/poly2wkt.pl $i > ${i/.poly/}.wkt
  else
    echo "LARGE REGION WITH MORE THAN 20.000 POINTS"
    /var/apps/wheelmap/production/current/script/simplify-poly.pl --slope=0.00001 --same=0.0001 $i > ${i/.poly/}_simple.poly
    /var/apps/wheelmap/production/current/script/poly2wkt.pl ${i/.poly/}_simple.poly > ${i/.poly/}.wkt
  fi
done

rm *_simple.poly
rename 's/_\d+\.wkt$/\.wkt/' *.wkt

