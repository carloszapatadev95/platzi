console.log('hola carlos lloron ');
let frutas = [1,"manzana", "pera", "cambur", "mamones"];
// console.log(frutas);

// frutas.push('caraotas');
// console.log(frutas);
// // frutas.unshift(1,2);
// // console.log(frutas);
// // frutas.shift();
// // console.log(frutas);
// function arr(fruta) {
//     console.log('->',fruta);
//     // if (typeof fruta[0] === 'string' ) {
//     //     console.log('ppp', true);
//     // } else {
//     //     console.log('333', false);
//     // }
//     let res = typeof fruta === 'string'? true : false;
//      console.log(res);
    
// }
// arr(frutas[0]);
// frutas.push('carlitos lloron');

// var recorrido = function (frutas){
//    console.log(`hola ${frutas}`);
   
// }
// for (let i = 0; i < frutas.length; i++) {
//     recorrido(frutas[i]);
    
// }
// for (const ddd of frutas ) {
//     recorrido(ddd);
// }
// frutas.forEach(element => {
//     console.log('metodo foreacht',element);
//     if (element === 'pera') {
//         let nombre = element;
//         document.querySelector('#nombre_p').innerHTML = nombre;
//     }
// });

// while (frutas.length > 0) {
//     console.log(`hola while ${frutas}`);
//     let d = frutas.shift();
//     recorrido(d)
// }

let estudiantes_uno= ['carlos', 'david', 'greibis', 'nino'];
let count = 0;
let nuevo_uno = 'jose';
const comprobando = (estudiantes, deathCoun,nuevo) => {
  //estudiantes_uno.unshift(nuevo_uno);

    console.log(estudiantes, deathCoun, nuevo);
 
    if (deathCoun === 0) {
      estudiantes.push(nuevo);
      console.log(estudiantes);
    }

    
}
comprobando( estudiantes_uno, count, nuevo_uno)

let carro= {

  marca: 'toyota',
  modelo: 'hylux',
  llantas: 4,
  año:2020,
  detalle:function(){
    console.log(`detalles  ${this.marca} ${this.modelo}`);
  }
}
// creando una funcion constructora
class Autos {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
}
//funcion para guardar la canta de autos 
const auto_guardar = (nuevo) => {
  console.log("constructor",nuevo);
   let autos_guardados = [];
   let contador = 0;
    
   while (contador < 30) {
       autos_guardados.unshift(nuevo);
       contador++;
     } 
     return autos_guardados;
}
// Crear una nueva instancia de Auto
const auto_nuevo = new Autos("toyota", "yaris", 2020);
// Llamar a la función autospp con la nueva instancia de Auto
const autos_list = auto_guardar(auto_nuevo);
// Imprimir la lista de autos
for (let i = 0; i < autos_list.length; i++) {
    console.log(`Auto ${i + 1}: ${autos_list[i].marca} ${autos_list[i].modelo} (${autos_list[i].año})`);
}

// if (count === 0) {
//   estudiantes_uno.push(nuevo_uno);
//         comprobando(estudiantes_uno, count, nuevo_uno);
// }
function solution(cars) {
  // 👇 Este es el código que no funciona
  // return cars.find(function (car) {
  //   if (car.licensePlate) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  let res = cars;
  let filtro = res.filter(res => res.licensePlate)
  console.log('filtro',filtro);
  // res.shift();
  // console.log(res);
  

}
const cars = [
  {
    color: 'red',
    brand: 'Kia',
  },
  {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  },
  {
    licensePlate: 'RGB255',
  },
];

solution(cars);
const fruits = [
  { id: 1, name: 'Kiwi', quantity: 5 },
  { id: 2, name: 'Banana', quantity: 30 },
  { id: 3, name: 'Pineapple', quantity: 3 },
];

 console.log(fruits.some((fruit) => fruit.quantity > 30));