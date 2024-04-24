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

// interface Lengthwise {
//     length: number
// }

// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type{
//     console.log(arg.length)
//     return arg
// }

// loggingIdentity(5)
// loggingIdentity("asdfgdasdgsd")
// loggingIdentity([1,23,5,6,34,68,"sdg"])
// loggingIdentity({ length: 10, value: 3 })

// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key]
// }

// let x = { a: 1, b: 2, c: 3, d: 4};

// getProperty(x, "a");
// getProperty(x, "b");
// getProperty(x, "m");

// class BeeKeeper {
//   hasMask: boolean = true;
// }

// class ZooKeeper {
//   nametag: string = "Mikle";
// }

// class Animal {
//   numLegs: number = 4;
// }

// class Bee extends Animal {
//   numLegs = 6;
//   keeper: BeeKeeper = new BeeKeeper();
// }

// class Lion extends Animal {
//   keeper: ZooKeeper = new ZooKeeper();
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }

// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;

const div = create();

const p = create(new HTMLParagraphElement());
