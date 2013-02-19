#!/usr/bin/perl

# script to convert an OSM file to a polygon file.
#
# usage: 
# perl rel2osm.pl < input.osm > output.poly
#
# difference between this program and osm2poly.pl:
#
# This program takes all ways found in the file, assembles them into rings, and
# outputs ONE polygon for the ring with the most nodes. This means that it works 
# for files with one closed way as well as for files with a multipolygon or 
# boundary relation as obtained by an URL like
# http://api.openstreetmap.org/api/0.6/relation/1234/full
#
# This program does not honour inner rings or multiple outer rings. This could
# be improved if somebody were so inclined.
#
# On the other hand, osm2poly.pl requires closed ways only (no relation 
# processing) but can support multiple of them in one file.
#
# written by Frederik Ramm <frederik@remote.org>, public domain.

use strict;
use warnings;

my $poly_id;
my $poly_file;
my $polybuf;
my $outbuf;
my $nodes;
my $id=0;
my $ways;
my $wayid;
my $currentway;
my $waycount;
my $nodecount;

while(<>) 
{
    if (/^\s*<node.*\sid=["']([0-9-]+)['"].*lat=["']([0-9.eE-]+)["'] lon=["']([0-9.eE-]+)["']/)
    {
        $nodes->{$1}=[$2,$3];
        $nodecount++;
    }
    elsif (/^\s*<way.*\sid=["']([0-9-]+)['"]/)
    {
        $wayid=$1;
        $waycount++;
    }
    elsif (/^\s*<nd ref=['"]([0-9-]+)["']/)
    {
        my $id=$1;
        die("dangling reference to node $id") unless defined($nodes->{$id});
        push(@$currentway, $id);
    }
    elsif (/^\s*<\/way/) 
    {
        $ways->{$wayid} = $currentway;
        undef $currentway;
    }
}

my $rings;
my $currentring = [];
my $firstnode;
my $lastnode;
my $closed = 0;
my $unclosed = 0;

die ("no ways found in file") unless(scalar keys %$ways);

while(scalar keys %$ways)
{
    my $nochange = 1;
    foreach my $wid (keys %$ways)
    {
        if (!scalar(@$currentring))
        {
            add_way_to_ring($currentring, $wid, 0, 0);
            delete $ways->{$wid};
            $nochange = 0;
            last;
        }
        $firstnode = $currentring->[0];
        $lastnode = $currentring->[scalar(@$currentring)-1];
        my $wayfirst = $ways->{$wid}->[0];
        my $waylast = $ways->{$wid}->[scalar(@{$ways->{$wid}})-1];
        if ($wayfirst == $firstnode)
        {
            shift @$currentring;
            add_way_to_ring($currentring, $wid, 1, 1);
            delete $ways->{$wid};
            $nochange = 0;
            last;
        } 
        elsif ($wayfirst == $lastnode)
        {
            pop @$currentring;
            add_way_to_ring($currentring, $wid, 0, 0);
            delete $ways->{$wid};
            $nochange = 0;
            last;
        }
        elsif ($waylast == $firstnode)
        {
            shift @$currentring;
            add_way_to_ring($currentring, $wid, 1, 0);
            delete $ways->{$wid};
            $nochange = 0;
            last;
        } 
        elsif ($waylast == $lastnode)
        {
            pop @$currentring;
            add_way_to_ring($currentring, $wid, 0, 1);
            delete $ways->{$wid};
            $nochange = 0;
            last;
        }
    }
    $firstnode = $currentring->[0];
    $lastnode = $currentring->[scalar(@$currentring)-1];
    if ($nochange)
    {
        $currentring = [];
        $unclosed++;
        next;
    }
    if ($firstnode == $lastnode)
    {
        push(@$rings, $currentring);
        $closed++;
        $currentring = [];
    }
}

die ("no closed rings in file") unless $closed;

printf(STDERR "processed %d nodes, %d ways, dropped %d unclosed rings, chose biggest of %d closed rings\n",
   $nodecount, $waycount, $unclosed, $closed);

foreach my $ring(sort { scalar(@$b) <=> scalar(@$a) } @$rings)
{
    print "polygon\n1\n";
    foreach my $id(@$ring)
    {
        printf("   %E   %E\n", $nodes->{$id}->[1], $nodes->{$id}->[0]);
    }
    printf("END\nEND\n");
    last;
}

sub add_way_to_ring
{
    my ($ring, $wayid, $front, $rev) = @_;
    my @nodes = @{$ways->{$wayid}};
    @nodes = reverse @nodes if ($rev);
    if ($front) { unshift(@$ring, @nodes) } else { push(@$ring, @nodes) };
}

