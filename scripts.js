
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/img,"enter");
    var txtCifrado = txtCifrado.replace(/o/img,"ober");
    var txtCifrado = txtCifrado.replace(/i/img,"imes");
    var txtCifrado = txtCifrado.replace(/a/img,"ai");
    var txtCifrado = txtCifrado.replace(/u/img,"ufat");
    
    document.getElementById("logo2").style.display = "none";
    document.getElementById("nota2").style.display = "none";
    document.getElementById("text-area2").innerHTML = txtCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img,"e");
    var txtCifrado = txtCifrado.replace(/ober/img,"o");
    var txtCifrado = txtCifrado.replace(/imes/img,"i");
    var txtCifrado = txtCifrado.replace(/ai/img,"a");
    var txtCifrado = txtCifrado.replace(/ufat/img,"u");
    
    document.getElementById("logo2").style.display = "none";
    document.getElementById("nota2").style.display = "none";
    document.getElementById("text-area2").innerHTML = txtCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";

}

function copy(){
    var contenido = document.querySelector("#text-area2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio");

}