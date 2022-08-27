/*const fruits = ['Manzana', 'Pera', 'Uva', 'Papaya', 'Bananos'];
let i = 0;
const findFruit = 'Uva';

console.log('start');

while (i < fruits.length) {
  if (fruits[i] === findFruit) {
    console.log(findFruit);
  } else {
    console.log(i);
  }
  i++;
}

console.log('end');*/

//contar del 1 al 10
/*let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}*/

//decrementar del 10 al 1
/*let i = 11;
while (i > 1) {
  i--;
  console.log(i);
}*/

//contar del 1 al 10 con bucle for
/*let i = 0;
for (i = 0; i < 10; i++) {
  console.log(i);
}*/

//decrementar del 10 al 1 con bucle for
/*let i = 10;
for (i = 10; i > 0; i--) {
  console.log(i);
}*/

let i = 0;

while (i < 100) {
  const mod = i % 2;
  if (mod != 0) {
    console.log(i);
  }

  i++;
}
