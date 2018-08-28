/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var hartLeeg = document.querySelector('.hartjeleeg');
var hartVol = document.querySelector('.hartjevol');

function likes() {
    console.log("clicked");    
    hartLeeg.classList.toggle('hidden');
    hartVol.classList.toggle('hidden');
    hartVol.classList.toggle('hartAnimatie');
}



hartLeeg.addEventListener('click', likes);
hartVol.addEventListener('click', likes);