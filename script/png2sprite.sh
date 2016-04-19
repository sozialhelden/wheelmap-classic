#!/bin/bash

# uses imagemagick to stich together all images in a folder and
# then writes a css file with the correct offsets along with a
# test html page for verification that its all good

if [ $# -gt 0 ]
then

    ext=".png"; # the extension to iterate over for input files
    name=$1; # output will be placed in a folder named this

    css="$name/icons.css";
    html="$name/test.html";
    sprite="$name/icon-sprite.png";

    rm -fr $name;
    mkdir $name;
    touch $css $html;
    rm files.txt

    echo "Generating sprite file...";
    find public/icons -name "*$ext" -not -iname "*@2x$ext" -not -iname "icon-sprite.png" | sort > files.txt;
    convert @files.txt -append $name/icon-sprite$ext;
    echo "Sprite complete! - Creating css & test output...";

    echo -e "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"`basename $css`\" />\n</head>\n<body>\n  <h1>Sprite test page</h1>\n" >> $html

    echo -e ".leaflet-marker-icon .icon {\n  margin:3px 4px;\n  background:url('/icons/icon-sprite$ext') no-repeat top left;\n  display:inline-block;\n}" >> $css;
    counter=0;
    offset=0;
    for file in `find public/icons -name "*$ext" -not -iname "*@2x$ext" -not -iname "icon-sprite.png | sort"`
    do
      echo $file;
        width=`identify -format "%[fx:w]" "$file"`;
        height=`identify -format "%[fx:h]" "$file"`;
        idname=`basename "$file" $ext`;
        clean=${idname// /-}
        echo ".leaflet-marker-icon .icon#$clean {" >> $css;
        echo -e "  background-position:0 -${offset}px;" >> $css;
        echo -e "  width: ${width}px;" >> $css;
        echo -e "  height: ${height}px;\n}" >> $css;

        echo -e "<a href=\"#\" class=\"icon\" id=\"$clean\"></a>\n" >> $html;

        let offset+=$height;
        let counter+=1;
        echo -e "  #$counter done";
    done
    echo -e "<h2>Full sprite:</h2>\n<img src=\"icon$ext\" />" >> $html;
    echo -e "</body>\n</html>" >> $html;

    echo -e "\nComplete! - $counter sprites created, css written & test page output. ~jaymz";
    cp -fv ./$sprite ./public/icons/;
    cp -fv $css ./app/stylesheets/relaunch/_icons.css.scss;
    rm -fr $name;
    rm -fr files.txt
else

    echo -e "There should be at least 1 argument!\nbuildSprite.sh output_folder classname input_extension"

fi
