// function greet(person, date, age) {
//   console.log(`Hello ${person}, today is ${date}, age is ${age}!`);
// }
// greet("Brendan", 2024);
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
