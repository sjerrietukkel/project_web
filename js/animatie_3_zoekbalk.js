var zoekBalk = document.querySelector('.zoekbalk');
var zoeken = document.querySelector('.zoeken');
var vergrootglas = document.querySelector('.fa-search');

function zoek() {
    console.log("clicked");    
    /*zoeken.classList.toggle('hidden2');*/
    vergrootglas.classList.toggle('zoekenFade')
    zoekBalk.classList.toggle('hidden');
    zoekBalk.classList.toggle('zoekbalkTransitie');
}


zoeken.addEventListener('click', zoek)
zoekBalk.addEventListener('focusout', zoek);