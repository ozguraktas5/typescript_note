// function greet(person, date, age) {
//   console.log(`Hello ${person}, today is ${date}, age is ${age}!`);
// }
// greet("Brendan", 2024);
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
// let obj: any = { x:0 };
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// function greet(name: string) {
//     console.log("Hello, " + name.toUpperCase() + "!!");
// };
// greet(32)
// function getFavouriteNumber(): number {
//     return 22
// }
// async function getFavouriteNumber(): Promise<number> {
//     return 16;
// };
// const names = ["Alice", "Bob", "Eve"];
// names.forEach(function (s) {
//     console.log(s.toUpperCase());
// });
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });
// function printCoord( pt: {x: number, y: number}) {
//     console.log("The coordinate's x: " + pt.x)
//     console.log("The coordinate's y: " + pt.y)
// }
// printCoord({ x:  5, y: 7 });
function printName(obj) {
    return "Hello ".concat(obj.firstName, " ").concat(obj.lastName);
}
;
console.log(printName({ firstName: "John" }));
console.log(printName({ firstName: "Michael", lastName: "Jordan" }));
