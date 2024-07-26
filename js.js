function Encrip(){
    let text = document.getElementById('texto').value;
    let mensaje = document.getElementById('mensaje1');
    let mensaje1 = document.getElementById('mensaje2');
    let muñeco = document.getElementById('muñeco');
    let textoED = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if(text.length != 0){
        document.getElementById('texto').value = textoED;
        mensaje.textContent = "Texto encriptado";
        mensaje1.textContent = " ";
    }
} 

function Desencrip(){
    let text = document.getElementById('texto').value;
    let mensaje = document.getElementById('mensaje1');
    let mensaje1 = document.getElementById('mensaje2');
    let muñeco = document.getElementById('muñeco');
    let textoED = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if(text.length != 0){
        document.getElementById('texto').value = textoED;
        mensaje.textContent = "Texto desencriptado ";
        mensaje1.textContent = " ";
    }

}