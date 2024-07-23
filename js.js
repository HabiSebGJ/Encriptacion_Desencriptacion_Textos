function Encrip(){
    let text = document.getElementById('texto').value;
    let textoED = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if(text.length != 0){
        document.getElementById('texto').value = textoED;
    }
} 