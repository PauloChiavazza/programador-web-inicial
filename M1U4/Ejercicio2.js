//Haciendo uso de los bucles, recorrer un array de números y determinar cual es el mayor

var x=1;
var cuantos;
var valor;
var nummayor=0;

cuantos = prompt('Defina la cantidad de numeros que desea ingresar', '');
cuantos = parseInt(cuantos);

while (x <= cuantos) {
    valor = prompt('Ingrese el valor ' + x + ' de ' + cuantos + ':', '');
    valor = parseInt(valor);
    if (valor >= nummayor) {
        nummayor = valor
        nummayor = parseInt(nummayor);
    }
    x = x + 1;
    
}
document.write("El numero mayor es " + nummayor + "<br/>");


