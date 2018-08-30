/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var hartLeeg = document.querySelector('.hartjeleeg');
var hartVol = document.querySelector('.hartjevol');
var aantalLikes = document.getElementById('likenummer');

function likes() {
    console.log("clicked");    
    hartLeeg.classList.toggle('hidden');
    hartVol.classList.toggle('hidden');
    hartVol.classList.toggle('hartAnimatie');
    aantalLikes.innerHTML = "135 likes";
    aantalLikes.style.color = "red";
}



hartLeeg.addEventListener('click', likes);
hartVol.addEventListener('click', likes);