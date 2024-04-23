// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// };
var x = {
    contents: "hello world",
};
if (typeof x.contents === "string") {
    console.log(x.contents.toUpperCase());
}
console.log(x.contents.toLowerCase());
