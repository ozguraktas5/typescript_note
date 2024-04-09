// function greet(person, date, age) {
//   console.log(`Hello ${person}, today is ${date}, age is ${age}!`);
// }
 
// greet("Brendan", 2024);

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());