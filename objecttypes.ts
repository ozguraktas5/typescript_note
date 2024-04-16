// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// };

// console.log(greet({name: "Ozgur", age:31}))

// interface Person {
//   name: string;
//   age: number;
// };

// function greet2(person: Person) {
//   return "Hello" + person.name;
// };

// console.log(greet({name: "Ozgur", age:31}))

// type Person2 = {
//   name: string;
//   age: number;
// };

// function greet3(person2: Person2) {
//     return "Hello" + person2.name
// }

// console.log(greet({name: "Ozgur", age:31}))

// interface PaintOptions {
//     shape: Shape;
//     xPos?: number;
//     yPos?: number
// }

// function paintShape(opts: PaintOptions) {

// }

// const shape = getShape();
// paintShape({ shape })
// paintShape({ shape, xPos: 10 })
// paintShape({ shape, yPos: 20 })
// paintShape({ shape, xPos: 10, yPos: 20 })

// function paintShape(opts: PaintOptions ) {
//     let xPos = opts.xPos === undefined ? 0 : opts.xPos;

//     let yPos = opts.yPos === undefined ? 0 : opts.yPos;
// }

// function paintShape({ shape, xPos=0, yPos=0} : PaintOptions) {
//     console.log("x coordinate at", xPos);
//     console.log("y coordinate at", yPos);
// }

// interface SomeType {
//     readonly prop: string;
// }

// function doSomething(obj: SomeType) {
//     console.log(`prop has the value ${obj.prop}`)

//     obj.prop = "hello"
// }

// interface Home {
//   readonly resident: { name: string; age: number };
// }

// function visitForBirtday(home: Home) {
//   console.log(`Happy birthday ${home.resident.name}`);
//   home.resident.age++;
// }

// function evict(home: Home) {
//   home.resident = {
//     name: "Sadik",
//     age: 43,
//   };
// }

// interface Person {
//     name: string;
//     age: number;
// }

// interface ReadOnlyPerson {
//     readonly name: string;
//     readonly age: number;
// }

// let writablePerson: Person = {
//     name: "Sercan",
//     age: 25
// }

// let readOnlyPerson: ReadOnlyPerson = writablePerson;

// console.log(readOnlyPerson.age)
// writablePerson.age++
// console.log(readOnlyPerson.age)

// interface StringArray {
//     [index: number]: string;
// }

// const myArray: StringArray = getStringArray();
// const secondItem = myArray[1];

interface NumberDictionary {
    [index: string]: number;

    length: number;
    name: string;
}

interface NumberOfStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
}

interface ReadOnlyStringArray {
    readonly [index: number]: string
}

let myArray: ReadOnlyStringArray = getReadOnlyStringArray();
myArray[2] = "Nuran"
