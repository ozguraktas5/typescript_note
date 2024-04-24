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

// interface NumberDictionary {
//     [index: string]: number;

//     length: number;
//     name: string;
// }

// interface NumberOfStringDictionary {
//     [index: string]: number | string;
//     length: number;
//     name: string;
// }

// interface ReadOnlyStringArray {
//     readonly [index: number]: string
// }

// let myArray: ReadOnlyStringArray = getReadOnlyStringArray();
// myArray[2] = "Nuran"

// interface SquareConfig {
//     color?: string
//     width?: number
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     return {
//         color: config.color || "red",
//         area: config.width ? config.width * config.width : 20,
//     }
// }

// let mySquare = createSquare({ color: "red", width: 100 });
// console.log(mySquare)

// let squareOptions2 = { colour: "red", width: 100 };
// let mySquare2 = createSquare(squareOptions2);
// console.log(mySquare2)

// let squareOptions3 = { colour: "red" };
// let mySquare3 = createSquare(squareOptions3);
// console.log(mySquare3)

// interface BasicAddress {
//     name?: string;
//     street: string;
//     city: string;
//     country: string;
//     postalCode: string;
// }

// interface AddressWithUnit {
//     name?: string;
//     unit: string;
//     street: string;
//     city: string;
//     country: string;
//     postalCode: string;
// }

// interface BasicAddress {
//     name?: string;
//     street: string;
//     city: string;
//     country: string;
//     postalCode: string;
// }

// interface AddressWithUnit extends BasicAddress {
//     unit: string;
// }

// interface Colorful {
//     color: string;
// }

// interface Circle {
//     radius: number;
// }

// interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle = {
//     color: "red",
//     radius: 40,
// }

// interface Colorful {
//     color: string;
// }

// interface Circle {
//     radius: number;
// }

// type ColorfulCircle = Colorful & Circle;

// function draw(circle: Colorful & Circle) {
//     console.log(`Color was ${circle.color}`)
//     console.log(`Radius was ${circle.radius}`)
// }

// draw({ color: "red", radius: 11 })
// draw({ color: "red", raidus: 42 })

// interface Box {
//     contents: unknown;
// }

// let x: Box = {
//     contents: "hello world",
// }

// if (typeof x.contents === "string") {
//     console.log(x.contents.toUpperCase())
// }

// console.log((x.contents as string).toLowerCase())

// interface NumberBox {
//     contents: number;
// }

// interface StringBox {
//     contents: string;
// }

// interface BooleanBox {
//     contents: boolean
// }

// function setContents(box: StringBox, newContents: string): void;
// function setContents(box: NumberBox, newContents: number): void;
// function setContents(box: BooleanBox, newContents: boolean): void;
// function setContents(box: { contents: any }, newContents: any) {
//     box.contents = newContents
// }

// interface Box<Type> {
//   contents: Type;
// }

// interface Box<Type> {
//   contents: Type;
// }
// interface StringBox {
//   contents: string;
// }

// let boxA: Box<string> = { contents: "hello" };
// boxA.contents;

// let boxB: StringBox = { contents: "world" };
// boxB.contents;

// function doSomething(value: Array<string>) {
//     console.log(value)
// }

// let myArray: string[] = ["hello", "world"];

// doSomething(myArray);
// doSomething(new Array("hello", "world"));

// function doSomething(pair: [string, number]) {
//   const a = pair[0];
//   const b = pair[1];

//   console.log(a,b)

// }

// doSomething(["hello", 42]);

// let point = [3, 4] as const;
 
// function distanceFromOrigin([x, y]: [number, number]) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }
 
// distanceFromOrigin(point);
