let numeros = [1, 2, 4, 7, 7 , "b"];
// for (const iterator of numeros) {
//     console.log(iterator);
// }


// //spread
// let numeros2 = [0, 0, 0 , ...numeros, "a", "b"];
// console.log(numeros2);


// let a = [1];
// a[98] = 10;
// a.push(2)
//  if (a[a.length -1] === undefined)
    // console.log("tem nada ai")
//  else
    // console.log("tem coisa ai")
// console.log(a);

//numeros.splice(a partir de x, remove y elementos, adiciona z1, adiciona z2)
numeros.splice(0, 1, 2, 3, 4);
console.log(numeros);
numeros.splice(0, 0, 99);
console.log(numeros);