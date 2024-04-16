function greet(person) {
    return "Hello " + person.name;
}
;
console.log(greet({ name: "Ozgur", age: 31 }));
;
function greet2(person) {
    return "Hello" + person.name;
}
;
console.log(greet({ name: "Ozgur", age: 31 }));
function greet3(person2) {
    return "Hello" + person2.name;
}
console.log(greet({ name: "Ozgur", age: 31 }));
