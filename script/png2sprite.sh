#!/bin/bash

# uses imagemagick to stich together all images in a folder and
# then writes a css file with the correct offsets along with a
# test html page for verification that its all good

if [ $# -gt 0 ]
then

    if [ $3 ]
    then
        ext="."$3; # the extension to iterate over for input files
    else
        ext=".png"; # the extension to iterate over for input files
    fi

    name=$1; # output will be placed in a folder named this

    if [ $2 ]
    then
        classname=$2;
    else
        classname=$1;
    fi
    css="$name/$classname.css";
    html="$name/test.html";
    sprite="$name/$classname-sprite.png";

    rm -fr $name;
    mkdir $name;
    touch $css $html;

    echo "Generating sprite file...";
    convert *$ext -append $name/$classname-sprite$ext;
    echo "Sprite complete! - Creating css & test output...";

    echo -e "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"`basename $css`\" />\n</head>\n<body>\n  <h1>Sprite test page</h1>\n" >> $html

    echo -e ".leaflet-marker-icon .$classname {\n  margin: 2px;\n  background:url('/icons/$classname-sprite$ext') no-repeat top left;\n  display:inline-block;\n}" >> $css;
    counter=0;
    offset=0;
    for file in *$ext
    do
        width=`identify -format "%[fx:w]" "$file"`;
        height=`identify -format "%[fx:h]" "$file"`;
        idname=`basename "$file" $ext`;
        clean=${idname// /-}
        echo ".leaflet-marker-icon .$classname#$clean {" >> $css;
        echo -e "  background-position:0 -${offset}px;" >> $css;
        echo -e "  width: ${width}px;" >> $css;
        echo -e "  height: ${height}px;\n}" >> $css;

        echo -e "<a href=\"#\" class=\"$classname\" id=\"$clean\"></a>\n" >> $html;

        let offset+=$height;
        let counter+=1;
        echo -e "  #$counter done";
    done
    echo -e "<h2>Full sprite:</h2>\n<img src=\"$classname$ext\" />" >> $html;
    echo -e "</body>\n</html>" >> $html;

    echo -e "\nComplete! - $counter sprites created, css written & test page output. ~jaymz";
    cp -f $sprite .;
    cp -f $css ./../../app/stylesheets/relaunch/_icons.css.scss;

else

    echo -e "There should be at least 1 argument!\nbuildSprite.sh output_folder classname input_extension"

fi