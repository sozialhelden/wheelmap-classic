#!/usr/bin/perl

use Math::Polygon;
use Getopt::Long;

my $percentage = 100;
my $slope = 0.1;
my $same = 0.001;
my $help = 0;

GetOptions ("percentage=i" => \$percentage,
  "slope=f"   => \$slope,
  "same=f"  => \$same,
  "help" => \$help) or help();

help() if $help;

# first line
my $line = <>;
print $line;

while(1)
{
    my @poly;
    my $line = <>;
    last if ($line =~ /^END/); # end of file
    my $hdr=$line;
    print STDERR "polygon $line";
    while($line = <>)
    {
        last if ($line =~ /^END/); # end of poly
        my ($dummy, $x, $y) = split(/\s+/, $line);
        push(@poly, [$x, $y]);
    }
    my $poly = Math::Polygon->new(@poly);
    printf STDERR "%d points original\n", $poly->nrPoints;
    my $max_points = $poly->nrPoints * $percentage / 100;
    my $simplified = $poly->simplify(max_points => $max_points,
        same => $same, slope => $slope);
    printf STDERR "%d points simplified\n", $simplified->nrPoints;
    next if ($simplified->nrPoints<3);
    print $hdr;
    foreach my $pt($simplified->points)
    {
        printf "   %E   %E\n", $pt->[0], $pt->[1];
    }
    print "END\n";
}
print "END\n";

sub help
{
    print STDERR <<EOF;
simplify-poly.pl: simplifies a polygon file as used by Osmosis et al.

options:

--slope=x (default: $slope) - with three points X(n),X(n+1),X(n+2),
    the point X(n+1) will be removed if the length of the path over
    all three points is less than "x" longer than the direct path
    between X(n) and X(n+2).

--same=x (default: $same) - remove points that are nearer than "x" to
    their neighbours.

--percent=x (default: $percent) - remove corners with widest angles
    until remaining polygon has only x% of the original number of nodes.

Note that for --slope and --same, distance is measured in degrees, so
gets distorted away from the equator.
EOF
    exit;
}
