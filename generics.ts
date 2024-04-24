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

function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length)
    return arg
}

loggingIdentity([1,2,3,4,5,6])



