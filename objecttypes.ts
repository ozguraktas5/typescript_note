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

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number
}

function paintShape(opts: PaintOptions) {

}

const shape = getShape();
paintShape({ shape })
paintShape({ shape, xPos: 10 })
paintShape({ shape, yPos: 20 })
paintShape({ shape, xPos: 10, yPos: 20 })