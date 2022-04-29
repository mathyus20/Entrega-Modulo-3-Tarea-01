const porcentaje = 100 ;

function validacion () {


    let valor = document.getElementById("num1").value;
    let propina = document.getElementById("num2").value;
    let valorint = parseInt (valor) ;
    let valorpro = parseInt (propina) ;
    let valorpropina = (valorint * valorpro/porcentaje);
    let totalapagar = (valorpropina + valorpro);
    if ( valor === "" ||propina === ""){
        alert("por favor ingrese los valores")
        document.getElementById("limpiar").style.display = "none" ;
     
    } 
    else {
        document.getElementById('valor1').innerHTML = valor ;
        document.getElementById('valor2').innerHTML = valorpropina ;
        document.getElementById('totalapagar').innerHTML = totalapagar ;
        //document.getElementById("limpiar").style.display = "block"
        document.getElementById("limpiar").classList.add("mostrar");
    }
}
//aqui se supone que debe
function esconder(){
    document.getElementById("limpiar").classList.remove("mostrar");
}
document.querySelector("caja").onclick = function (){
    esconder();
}






