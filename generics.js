// function identity(arg: number): number {
//     return arg;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nametag = "Mikle";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.numLegs = 4;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLegs = 6;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
