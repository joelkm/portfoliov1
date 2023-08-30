const logo = document.getElementById('logo');
const loading = document.getElementById('loading');

window.addEventListener('load', () => {
    loading.style.display = 'none';
})

logo.addEventListener('click', () => {
    location.reload();
})

document.querySelectorAll('.link-item').forEach((link) => {
    link.addEventListener('click', () => {
        console.log("click");
        let topPosition = document.getElementById(link.dataset.page).offsetTop - 200;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth'
        })
    });
})

function displayMobileNav(e) {
    let x = document.getElementsByClassName("list");
    if (x[0].style.display === "flex") {
        x[0].style.display = "none";
        hamburguer.classList.remove('ham-active');
    } else {
        x[0].style.display = "flex";
        hamburguer.classList.add('ham-active');
    }
}

const hamburguer = document.getElementsByClassName('hamburguer')[0];

hamburguer.addEventListener('click', (e) => {
    displayMobileNav();
})