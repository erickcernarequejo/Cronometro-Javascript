let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciarS');
let resetear = document.getElementById('resetear');
let grabar = document.getElementById('grabar');
let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0, intervalo = 0;
let verificador = false;

init();

function init() {
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabar.addEventListener('click', grabarContador);
}

function iniciarContador() {
    if (verificador == false) {
        intervalo = setInterval(function () {
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
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
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador() {
    if (temporizador.textContent === '0.00') {
        console.log('click en el botón iniciar')
    }
    else {
        let p = document.createElement('ul');
        p.innerHTML = `
        <li>Tiempo : ${tiempo.toFixed(2)}</li>
    `;
        almacenarTiempos.appendChild(p);
    }

}





// function promiseSquare(val){
//     return Promise.resolve(val * val);
// }

// function promiseDouble(val){
//     return Promise.resolve(val + val);
// }

// function filterFunction(val){
//     if ( val > 50)
//         return true;
//     else
//         return false;
// }

// var myPromise1 = Promise.resolve(500);
// var myPromise2 = promiseSquare(10);
// var myPromise3 = promiseDouble(20);

// Promise.all([myPromise1,myPromise2,myPromise3]).then(function(val){
//     var result = val.filter(filterFunction);
//     return result;

// }).then(function(val){
//     var temp = 0;
//     for(var i = 0; i < val.length; i++){
//         temp += val[i]
//     }
//     console.log(temp);

// }).catch(function(err){
//     console.log("Error: " + err)
// });