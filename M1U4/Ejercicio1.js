//Utilizando lo aprendido escribir el código necesario para que dada una distancia determine 
//el medio de transporte apropiado de acuerdo a las siguientes reglas:

//0 a 1000 metros = pie
//1000 a 10000 metros = bicicleta
//10000 a 30000 metros = colectivo
//30000 a 100000 metros = auto
//+100000 = avión//

var nombre;
var distancia;

nombre=prompt('Ingrese su nombre','');
distancia=prompt('Ingrese la distancia a recorreren metros','');

if (distancia <=1000) {
    alert(nombre+' se puede trasladar a Pie');
} else if (distancia>1000 && distancia<=10000 ) {
    alert(nombre+' usted debera ir en Bicicleta')
} else if (distancia>10000 && distancia<=30000 ) {
    alert(nombre+' usted debera tomar el Colectivo')
} else if (distancia>30000 && distancia<=100000 ) {
    alert(nombre+' usted debera ir en Auto')
} else {
    alert(nombre+' usted debera viajar en Avion')
}