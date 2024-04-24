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

// class GenericNumber<NumType> {
//     zeroValue: NumType;
//     add: (x: NumType, y: NumType) => NumType;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = function (x,y) {
//     return x+y
// }

// console.log(myGenericNumber.add(1,2))

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "1";
// stringNumeric.add = function (x, y) {
//     return x + y
// }

// console.log(stringNumeric.add(stringNumeric.zeroValue, "ozgur"))

interface Lengthwise {
    length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type{
    console.log(arg.length) 
    return arg
}

loggingIdentity(5)
loggingIdentity("asdfgdasdgsd")
loggingIdentity([1,23,5,6,34,68,"sdg"])







