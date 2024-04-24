// function identity(arg: number): number {
//     return arg;
// }
// function identity2(arg: any): any {
//     return arg;
// }
// function identity3<>(arg: Type): Type {
//     return arg;
// }
// function identity4<Type>(arg: Type): Type {
//     return arg;
// }
// function loggingIdentity<>(arg: Type): Type {
//     console.log(arg.length);
//     return arg;
// }
// function loggingIdentity<Type>(arg: Type[]): Type[] {
//     console.log(arg.length)
//     return arg
// }
// loggingIdentity([1,2,3,4,5,6])
// function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
//     console.log(arg.length)
//     return arg
// }
// function identity<Type>(arg: Type): Type {
//     return arg
// }
// let myIdentity: <Type>(arg: Type) => Type = identity;
// console.log(myIdentity(true))
// function identity<Input>(arg: Input): Input {
//     return arg
// }
// let myIdentity: <Input>(arg: Input) => Input = identity;
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let myIdentity: { <Type>(arg: Type): Type } = identity;
// interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
// }
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
// let myIdentity: GenericIdentityFn = identity;
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
