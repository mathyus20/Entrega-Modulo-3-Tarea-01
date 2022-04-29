const porcentaje = 100 ;

const validacion = () => {


    const valor = document.getElementById("num1").value;
    const propina = document.getElementById("num2").value;
    const valorint = parseInt (valor) ;
    const valorpro = parseInt (propina) ;
    const valorpropina = (valorint * valorpro/porcentaje);
    const totalapagar = (valorpropina + valorint );
    if ( valor === "" ||propina === ""){
        alert("por favor ingrese los valores")
        document.getElementById("limpiar").style.display = "none" ;
     
    } 
    else {
        document.getElementById('valor1').innerHTML = valor ;
        document.querySelector('span.valor-2').innerHTML = valorpropina ;
        document.getElementById('totalapagar').innerHTML = totalapagar ;
        //document.getElementById("limpiar").style.display = "block"
        document.getElementById("limpiar").classList.add("mostrar");
    }
}
//aqui se supone que debe
const esconder = () =>{
    document.getElementById("limpiar").classList.remove("mostrar");
}






