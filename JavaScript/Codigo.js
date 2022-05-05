var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");

function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("a", "ai").replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    var mensajeEncriptado = inputMensaje.value
    var mensaje = mensajeEncriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ai", "a").replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}


function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

botonEncriptar.onclick = encriptar;

botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = copiar;


