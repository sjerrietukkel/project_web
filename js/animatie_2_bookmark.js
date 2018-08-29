/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var bookmarkLeeg = document.querySelector('.bookmarkleeg');
var bookmarkVol = document.querySelector('.bookmarkvol');
var notificationDot = document.querySelector('.notification');

function save() {
    console.log("clicked");    
    bookmarkLeeg.classList.toggle('hidden');
    bookmarkVol.classList.toggle('hidden');
    bookmarkVol.classList.toggle('bookmarkAnimatie');
    notificationDot.classList.toggle('hidden');
    notificationDot.classList.toggle('notificationAnimatie');
}

bookmarkLeeg.addEventListener('click', save);
bookmarkVol.addEventListener('click', save);