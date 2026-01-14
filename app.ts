

const arr01 : (string | number)[] = [22, 'hello'];
console.log(arr01); //(2) [22, 'hello'];

const arr02 : Array<string | number> = [22, 'hi'];
console.log(arr02); //(2) [22, 'hello'];


// const cort01 : [string, boolean] = ['hello', false];
// console.log(cort01); //(2) ['hello', false]

// const cort02 : [string, boolean] = ['hello', 'asdf'];
// console.log(cort02) //ERROR

const arr3 : number[] = [11, 22, 33, 44];
const [a, ...b] = arr3;
console.log(a, b); //(3) [22, 33, 44]
let z = [a, ...b]
console.log(z); //(4) [11, 22, 33, 44]
console.log(z.join(',')); //11,22,33,44
console.log(z.toString());// 11,22,33,44
// console.log(a, b)
// let z = [a, b.join(',').split(',').join(',')];


// console.log(b.join(','))
// let y = [a.toString(), ...b];
// let y = [a.toString(), b.join(',')]
// console.log(y);

let arr11 : [number, number, number[]] = [1, 2, [3, 4]];
console.log(arr11.flat());

// let foo: string[][] = [["a", "b", "c"], ["a", "b", "c"], ["a", "b", "c"]];
// let bar = foo.flat()