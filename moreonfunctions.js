// function greeter(fn: (a:string) => void) {
//     fn("Hello, World")
// }
function len(x) {
    return x.length;
}
console.log(len(""));
console.log(len([1, 2]));
console.log(len(Math.random() > 0.5 ? "hello" : [0]));
