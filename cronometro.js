const temporizador = document.getElementById('temporizador');
const iniciar = document.getElementById('iniciarS');
const resetear = document.getElementById('resetear');
const grabar = document.getElementById('grabar');
const almacenarTiempos = document.getElementById('almacenarTiempos');
const themeToggle = document.getElementById('themeToggle');

let tiempo = 0, intervalo = 0;
let verificador = false;
let currentTheme = localStorage.getItem('theme') || 'light';

init();
initTheme();

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function init() {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
    themeToggle.addEventListener('click', toggleTheme);
}

function iniciarContador() {
    if (!verificador) {
        intervalo = setInterval(function () {
            tiempo += 0.01;
            temporizador.textContent = tiempo.toFixed(2);
        }, 10);
        verificador = true;
    } else {
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador() {
    verificador = false;
    tiempo = 0;
    temporizador.textContent = tiempo.toFixed(2);
    clearInterval(intervalo);
    while (almacenarTiempos.firstChild) {
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador() {
    if (temporizador.textContent === '0.00') {
        return;
    }
    const p = document.createElement('ul');
    p.className = 'tiempo-item';
    p.innerHTML = `<li>Tiempo: ${tiempo.toFixed(2)}s</li>`;
    almacenarTiempos.appendChild(p);
}
