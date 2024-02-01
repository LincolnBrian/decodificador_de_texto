


document.getElementById("texto_copiar").style.display = "";

function textoDigitado() {
     var x = document.getElementById("texto_copiar");
     if (x.style.display === "none") {
          x.style.display = 'block';
     } else {
          x.style.display = 'none';
     }
}