//This file contains code for the header slideshow
var i = 0;
var elem;
var images = ["url(header/image1.jpg)",
                 "url(header/image2.jpg)",
                 "url(header/image3.jpg)",
                 "url(header/image4.jpg)",
                 "url(header/image5.jpg)",
                 "url(header/image6.jpg)"
];

function Next(){
    
    elem.style.opacity = 0.2;
    elem.style.backgroundImage=images[i];
    i++; 
    if(i > (images.length - 1)){
        i = 0;   
    }
    setTimeout('Slide()',300);
}

function Slide(){
    elem.style.opacity = 1;
    elem.style.backgroundImage = images[i];   
    setTimeout('Next()',4000);
}
