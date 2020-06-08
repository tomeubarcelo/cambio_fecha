/*  ********************************
 * @title Ejercicio cambiar color fondo segun fecha
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

/*
Crear una funcionalidad en una web, donde el color de fondo cambie según el día.
 */

const colors = ["red", "green", "yellow", "blue", "magenta", "orange", "pink"];
//array de colores, uno para cada dia de la semana segun su posicion
// red -> domingo, green -> lunes, etc

function devuelveDiaSemana() {
    var date = new Date(); //declaramos objeto date
    var day = date.getDay(); //obtenemos dia de la semana (empieza en domingo)
    return day;
}

function cambiaColor() {
    var color = colors[devuelveDiaSemana()]; //obtiene del array un color segun el dia de la semana
    document.getElementsByTagName("body")[0].style.backgroundColor = color; //asignamos el color al fondo
}

cambiaColor();