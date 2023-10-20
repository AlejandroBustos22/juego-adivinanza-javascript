let numeroAzar = Math.floor(Math.random() * 100) + 1;
let numeroIngresado = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0


function comprobarResultado(){
    intentos ++ 
    intento.textContent = intentos
    let numeroPuesto = parseInt(numeroIngresado.value)
    if(numeroPuesto < 1 || numeroPuesto > 100 || isNaN(numeroPuesto)){
        mensaje.textContent = 'Porfavor ingrese un numero valido entre 1 y 100';
        return;
    }
    if(numeroPuesto === numeroAzar){
        mensaje.textContent = 'Felicitaciones Usted adivino el numero';
        mensaje.style.color = 'green';
        numeroIngresado.disabled = true;
    }else if(numeroPuesto < numeroAzar ){
        mensaje.textContent = 'Mas Alto!, usted esta lejos del numero';
        mensaje.style.color = 'red';

    }else{
        mensaje.textContent = 'Mas Bajo!, usted esta lejos del numero';
        mensaje.style.color = 'red';
    }

}
