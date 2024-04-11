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

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed)
