// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// };
function visitForBirtday(home) {
    console.log("Happy birthday ".concat(home.resident.name));
    home.resident.age++;
}
function evict(home) {
    home.resident = {
        name: "Sadik",
        age: 43,
    };
}
