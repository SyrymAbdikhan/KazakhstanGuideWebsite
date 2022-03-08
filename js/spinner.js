
let spinner = document.querySelector('.spinner-wrapper');
document.body.scroll = false;

window.addEventListener('load', function(){
    spinner.parentElement.removeChild(spinner);
    document.body.style.overflow = "visible";
});
