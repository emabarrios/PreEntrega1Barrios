
let cliente = prompt("Bienvenido. Es usted cliente? Si / No");

if (cliente == "si" || cliente == "SI" || cliente == "Si"){
    usuario = prompt("Ingrese su nombre de usuario");
    tipoServicio();
}else {
    alert("Debe crear un usuario.")
}

// funcion

function tipoServicio(){
    let servicio = prompt(`Hola ${usuario}! Selecciona el número del service correspondiente: 
    1. Cambio de filtro. 
    2. cambio de aceite. 
    3. cambio de cubiertas.`);
    switch (servicio){
        case "1":
        alert(`Has seleccionado Cambio de filtro. Le enviaremos un mail con detalles de su turno.`);
        break;
        case "2":
        alert(`Has seleccionado Cambio de aceite. Le enviaremos un mail con detalles de su turno.`);
        break;
        case "3":
        alert(`Has seleccionado Cambio de cubiertas. Le enviaremos un mail con detalles de su turno.`);
        break;
        default:
            alert(`Ingrese un valor correcto`);
            break;
        }
    }
