//Crea un arreglo numeros con los valores: 1,2,3,4,5,6,7,8,9,10
let numeros = [1,2,3,4,5,6,7,8,9,10];
//Muestra en la consola el arreglo numeros
console.log(numeros);


//Crea un arreglo lista que contenga los valores "Manzana","Pera","Platano","Fresa","Sandia"
let lista = ["Manzana","Pera","Platano","Fresa","Sandia"];
//Muestra en consola solo el valor de Fresa del arreglo lista
console.log(lista[3]);

//Crea un arreglo triangulo con los valores 10, 50
let triangulo = [10,50];

//Crea una funcion areaTriangulo 
//Dentro de la funcion crea una variable resutado que
//multiplique lo que tiene el arreglo el posicion 0 y 1  lo divida entre 2
//Muestra en consola la variable resultado

function areaTriangulo(){
    let resultado = (triangulo[0] * triangulo[1]) / 2;
    console.log(resultado);
}


areaTriangulo();