#!/bin/bash

for f in `find $1 -type f -name "*.poly"`; do
  # echo "perl script/poly2wkt.pl $f > ${f/.poly}.wkt";
  `perl script/poly2wkt.pl "$f"  > "${f/.poly}.wkt"`;
done