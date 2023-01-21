var entrada, entradaEncriptada, textoDesencriptado, textoCopiado;
function encriptar(){ 
  /* reseteamos textarea "mensaje" para que no se concatene el texto
  que contenga al ejecutar esta función */
  borrarResultado();

  // quitamos espacios antes y después de la cadena con trim
  entrada = document.getElementById("textinput").value.trim(); 
  entradaEncriptada = entrada.replace(/e/img,"enter");
  entradaEncriptada = entradaEncriptada.replace(/i/img,"imes");
  entradaEncriptada = entradaEncriptada.replace(/a/img,"ai");
  entradaEncriptada = entradaEncriptada.replace(/o/img,"ober");
  entradaEncriptada = entradaEncriptada.replace(/u/img,"ufat");
  mostrarTextoEncriptado();
  
  }

  function mostrarTextoEncriptado(){
    document.querySelector(".mensaje").value = entradaEncriptada;
    checarContenido();
  }

  function borrarResultado(){
    document.querySelector(".mensaje").value = '';
    checarContenido();
  }

  function borrarTextArea(){
    document.querySelector(".text-area").value = '';
    checarContenido();
  }

  function desencriptar(){

    entradaEncriptada = document.querySelector(".mensaje").value;
    textoDesencriptado = entradaEncriptada.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    mostrarTextoDesencriptado();
  
  }

  function mostrarTextoDesencriptado(){
    document.querySelector(".mensaje").value = textoDesencriptado;
    checarContenido();
  }

  function copiar(){
    textoCopiado = '';
    textoCopiado = document.querySelector(".mensaje");
    textoCopiado.select();
    document.execCommand('copy');
  }

  function checarContenido(){
    
    if( document.querySelector(".mensaje").value == ''){
      document.querySelector(".mensaje").style.backgroundImage ='url("imagenes/oops.png")';
      document.querySelector(".mensaje-info").style.visibility = 'visible';
      
    }else{
      document.querySelector(".mensaje").style.backgroundImage = 'none';
      document.querySelector(".mensaje-info").style.visibility = 'hidden';
    }
  }

    window.onload = function(){
      document.getElementById("btn1").onclick = encriptar;
      document.querySelector(".btn-desencriptar").onclick = desencriptar;
      document.querySelector(".btn-reset").onclick = borrarTextArea;
      document.querySelector(".btn-reset-mensaje").onclick = borrarResultado;
      document.querySelector(".btn-copiar").onclick = copiar;
      
      // checar si el usuario teclea directamente en el textarea mensaje

      const textarea = document.querySelector(".mensaje");
      textarea.addEventListener("input", function() {
        checarContenido();
      });

    }


    



