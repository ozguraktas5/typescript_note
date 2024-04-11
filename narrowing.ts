// function padLeft(padding: number | string, input: string): string {
//     throw new Error("Not implement yet")
// }

// function padLeft(padding: number | string, input: string): string {
//     return " ".repeat(padding) + input
// }

// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === "number") {
//     return " ".repeat(padding) + input;
//   }
//   return padding + input;
// }

// console.log(padLeft(5, "Hello"));

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }

// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   }
// }

// printAll(null);
// printAll(["foo", "bar"]);
// printAll("1")

// function multiplyAll(
//   values: number[] | undefined,
//   factor: number
// ): number[] | undefined {
//   if (!values) {
//     return values;
//   } else {
//     return values.map((x) => x * factor);
//   }
// }

// console.log(multiplyAll(undefined, 5));
// console.log(multiplyAll([2, 3, 4], 5));

// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     // We can now call any 'string' method on 'x' or 'y'.
//     x.toUpperCase();

//     y.toLowerCase();
//   } else {
//     console.log(x);

//     console.log(y);
//   }
// }

// example("hello", true);
// example("hello", "hello")

// interface Container {
//   value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//   // Remove both 'null' and 'undefined' from the type.
//   if (container.value != null) {
//     console.log(container.value);

//     // Now we can safely multiply 'container.value'.
//     container.value *= factor;
//   }
// }

// multiplyValue({ value: 10 }, 5);

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     animal;
//   } else {
//     animal;
//   }

//   return animal.fly();
// }

// let x = Math.random() < 0.5 ? 10 : "hello world";

// x = 1;

// console.log(x);

// x = "goodbye";

// console.log(x);

// function example() {
//     let x: string | number | boolean;

//     x = Math.random() < 0.5

//     console.log(x) // boolean

//     if (Math.random() < 0.5) {
//         x = "hello";
//         console.log(x); // string
//     } else {
//         x = 100;
//         console.log(x)  // number
//     }

//     return x;
// }

// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
// }

// let pet = getSmallPet();

// if (isFish(pet)) {
//     pet.swim();
// } else {
//     pet.fly();
// }

// interface Circle {
//     kind: "Circle";
//     radius: number;
// }

// interface Square {
//     kind: "Square";
//     sideLength: number;
// }

// type Shape = Circle | Square;

// // function getArea(shape: Shape) {
// //     if(shape.kind === "Circle"){
// //         return Math.PI * shape.radius ** 2
// //     }
// // }

// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "Circle":
//             return Math.PI * shape.radius ** 2
//         case "Square":
//             return shape.sideLength ** 2
//     }
// }

// console.log(getArea({kind:"Circle", radius:5}));
// console.log(getArea({kind:"Square", sideLength:4}));

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }

// interface Triangle {
//   kind: "triangle";
//   sideLength: number;
// }

// type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;

//       return _exhaustiveCheck;
//   }
// }
