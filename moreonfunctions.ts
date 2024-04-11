// function greeter(fn: (a:string) => void) {
//     fn("Hello, World")
// }

// function printToConsole(s: string) {
//     console.log(s)
// }

// greeter(printToConsole);

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(1));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc);

// type SomeConstructor = {
//   new (s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
// }

// const s = firstElement(["a", "b", "c"]);
// console.log(s)

// const n = firstElement([1, 2, 3]);
// console.log(n)

// const u = firstElement([]);
// console.log(u)

// function map<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output
// ): Output[] {
//   return arr.map(func);
// }

// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// console.log(parsed)

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//     if(a.length >= b.length) {
//         return a;
//     } else {
//         return b;
//     }
// }

// const longerArray = longest([1,2], [1,2,3])
// console.log(longerArray)

// const longerString = longest("ozgur", "ebru")
// console.log(longerString)

// const notOK = longest(10, 1000);
// console.log(notOK)

// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//     return arr1.concat(arr2);
// }

// const arr1 = combine([1,2,3], ["hello"]);
// console.log(arr1);

// const arr2 = combine<string | number>([1,2,3], ["hello"]);
// console.log(arr2);

// function firstElement1<Type>(arr: Type[]) {
//     return arr[0];
// }

// function firstElement2<Type extends any[]>(arr: Type) {
//     return arr[0];
// }

// const a = firstElement1([1, 2, 3]);
// console.log(a);
// const b = firstElement2([1, 2, 3]);
// console.log(b);

// function greet<Str extends string>(s: Str) {
//     console.log("Hello " + s);
// }

// greet("World")

// function greet(s: string) {
//     console.log("Hello " + s);
// }

// greet("World")

// function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i);
//     }
// }

// myForEach([1, 2, 3], (a) => console.log(a));
// myForEach([1, 2, 3], (a, i) => console.log(a, i));

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

