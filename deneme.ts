// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;

// console.log(area)

// console.log(4 / []);

// let helloworld = "Hello World";

// interface User {
//     name: string;
//     age: number;
// };

// const user: User = {
//     name: "John",
//     age: 30
// };

// const user1: User = {
//     username: "Ali",
//     age: 32
// };

// interface User {
//     name: string;
//     id: number;
// }

// class UserAccount {
//     name: string;
//     id: number;

//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const user: User = new UserAccount("Ozgur", 5);

// console.log(user)

// function wrapInArray(obj: string | string[]) {
//     if (typeof obj === "string") {
//         return [obj];
//     }
//     return obj;
// }

// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;

// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }

// declare const backpack: Backpack<string>;

// const object = backpack.get();

// backpack.add(12);

interface Point {
    x: number;
    y: number;
};

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 5, y: 10 };
logPoint(point);

const point3 = { x: 7, y: 12, z:54};
logPoint(point3)

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); 

const color = { hex: "#187ABF" };
logPoint(color);

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(12,54);
logPoint(newVPoint)


