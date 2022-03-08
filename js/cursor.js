
let cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

window.addEventListener('mousedown', e => {
    cursor.classList.add("mouse-down");
    new Audio('https://www.fesliyanstudios.com/play-mp3/5').play();
});

window.addEventListener('mouseup', e => {
    cursor.classList.remove("mouse-down");
});

$(document).mouseleave(function () {
    cursor.style.display = "none";
});

$(document).mouseenter(function () {
    cursor.style.display = "block";
});
