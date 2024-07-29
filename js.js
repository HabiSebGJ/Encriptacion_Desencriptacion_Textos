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
        document.getElementById('texto').value = textoED.toLowerCase();
        mensaje.textContent = "Texto encriptado";
        mensaje1.textContent = " ";
        muñeco.src="./img/WorkDone.png";
        
    }else{
        muñeco.src = "./img/Muñeco.png";
        alert('No hay texto a encriptar');
        mensaje.textContent = "Ingresa un texto";
        mensaje2.textContent="Ingresa el texto que desees encriptar, desencriptar o copiar.";    
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
        document.getElementById('texto').value = textoED.toLowerCase();
        mensaje.textContent = "Texto desencriptado ";
        mensaje1.textContent = " ";
        muñeco.src="./img/WorkDone.png";
    }else{
        alert('No hay texto a desencriptar');
        mensaje.textContent = "Ingresa un texto";
        muñeco.src = "./img/Muñeco.png";
        mensaje2.textContent="Ingresa el texto que desees encriptar, desencriptar o copiar.";
    }

}

function CopiarText(){
    let mensaje = document.getElementById('mensaje1');
    let mensaje1 = document.getElementById('mensaje2');
    let text = document.getElementById('texto').value;
    if(text.length != 0){
        navigator.clipboard.writeText(text);
        mensaje.textContent = "Texto copiado ";
        mensaje1.textContent = " ";
        muñeco.src="./img/WorkDone.png";
    }else{
        alert('No hay texto a copiar');
        muñeco.src = "./img/Muñeco.png";
        mensaje.textContent = "Ingresa un texto";
        mensaje2.textContent="Ingresa el texto que desees encriptar, desencriptar o copiar.";
    }
}