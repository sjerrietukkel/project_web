const accordion = document.getElementById("accordion");
const content = document.getElementById("content");

accordion.addEventListener('click', (event) => {
    if (content.style.display === "none") {
        content.style.display = "flex";
    } else {
        content.style.display = "none";
    }
})

const accordion2 = document.getElementById("accordion2");
const content2 = document.getElementById("content2");

accordion2.addEventListener('click', (event) => {
    if (content2.style.display === "none") {
        content2.style.display = "flex";
    } else {
        content2.style.display = "none";
    }
})


console.log("doet ie het?")