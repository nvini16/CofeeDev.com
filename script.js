const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara2");

function abrirModal() {
    modal.style.left = '50%';
    mascara.style.visibility = 'visible';
}

function esconderModal() {
    modal.style.left = '-100%';
    mascara.style.visibility = 'hidden';
}
