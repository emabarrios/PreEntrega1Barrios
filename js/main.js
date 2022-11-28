
let cliente = prompt("Bienvenido. Es usted cliente? Si / No");

if (cliente.toLowerCase() == "si"){
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
        alert(`Has seleccionado Cambio de filtro.`);
        break;
        case "2":
        alert(`Has seleccionado Cambio de aceite.`);
        break;
        case "3":
        alert(`Has seleccionado Cambio de cubiertas.`);
        break;
        default:
            alert(`Ingrese un valor correcto`);
            break;
        }
    }
let anticipo = prompt(`${usuario} Debes abonar un anticipo de 3000 pesos`);

if (anticipo >= 3000 ){
    alert(`Gracias ${usuario}! llegará un correo a tu casilla con la información de tu turno asignado.`)
}else {
    alert("Debes abonar el anticipo necesario para realizar una reserva.")
}