
var header = document.querySelector('header');

header.style.backgroundImage = 'voitures/background1.jpg';


var images =["background-image: url(voitures/background1.jpg)", "background-image: url(voitures/background2.jpg)"];

console.log(images)
var i = 0;

function changeImages() {
    header.style = images[i];
    i++;
    if ( i>= images.length){
        i=0;
    }

}

setInterval(changeImages,1500);





