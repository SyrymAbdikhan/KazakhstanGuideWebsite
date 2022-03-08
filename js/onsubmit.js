
let form = document.querySelector('#MyForm');
let text = document.querySelector('.onsubmit');

function redirectMain() {
    window.location.href = "index.html";
}

form.addEventListener("submit", evt => {
    evt.preventDefault();
    window.scrollTo(0, 0);
    text.classList.add("d-flex");
    document.body.style.overflow = "hidden";
    setTimeout(redirectMain, 3000);
});