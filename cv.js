

document.getElementById("boton").onclick = function () {
    console.log("Capture el evento click edad")
    document.getElementById("demo").innerHTML = "Tengo 24 años"
}


function funcionColor() {
    console.log("Con este boton cambiamos el color del fondo Mi Curriculum");
    document.getElementById("fondo").style.backgroundColor = "rgb(93, 91, 224)"
}  

function miFuncion() {
    console.log("Esta es una funcion de despedida")
    var w = window.open();
    w.document.open();
    w.document.write("<h2>Gracias por ver mi CV!</h2>");
    w.document.close();
}