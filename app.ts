// let user: {
//   id: number;
//   username: string;
//   age: number;
//   skills: (string | number | boolean)[];
// } = {
//   id: 1,
//   username: "alo",
//   age: 15,
//   skills: [false],
// };

// user.age = 12;

// console.log(user.id);

// /////////////////

// let users: (string | number | boolean | Object)[] = [
//   "amin",
//   "ali",
//   "babak",
//   [],
// ];

// users.push(false);

// let items: (string | boolean | number)[][] = [
//   [false, "admin"],
//   [12, "b"],
// ];

// /////////////////
// let roul: [number, string, number] = [1, "1", 2];

// //////////////////
// function inLogin(
//   userName: string,
//   password: number | string
// ): boolean | number {
//   if (userName === "admin" && password === "admin") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(inLogin("m", "m"));

// /////////////////////////

// let test: any = 12

// let testt: number = 12;


// function sum(param1: number | string, param2: number | string) {
    

//     if (typeof param1 === "number" && typeof param2 === "number") {
//         return (
//             param1 + param2
//         )
//     } else if (typeof param1 === "string" && typeof param2 === "string") {
//         return (
//             param1.toString() + param2.toString()
//         )
//     }
    
// };

// console.log(sum("a", "b"));

// const userss: (string | number | boolean)[] = [];
// //////////////////////////

// let age: 10 | 11 | 20 = 10;
// age = 20; ////not

// function setProperty(params: "px" | "em" | "rem") {
//     return `20${params}`
// };

// console.log(setProperty("rem"));

// ///////////////////////////
// let num1 = 12;
// let num2 = 10;

// let sum2 = `sum: ${num1 + num2}`

// function setCSS(paramss:`${number}px` | `${number}em`) {
//     return (
//         paramss
//     )
// };

// console.log(setCSS(`12px`))
// //////////////////////////

// let testVar: unknown = 12;

// if (typeof testVar === "number") {
//     testVar++;
// }

// if (typeof testVar === "string") {
//     testVar.length;
// }

// testVar = "js";

// console.log(testVar);

// //////////////////////////////

// let mohammad: unknown = "mohammad";

// let firstName = mohammad as string;


// let subTitle = <string>mohammad;


// console.log((<string>mohammad).length);

// //////////////////////////////////

// let ali = <const>12;

// // ali = 15; ////error//////

// const numbers = <const>[12, 13];

// // numbers.push(10);/////error;

// function sum3(num1: number, num2:number) : number {
//     return num1 + num2;
// }


// console.log(sum3(...numbers))
// ////////////////////////////////

// const favorite = ["js", "st"];

// const users1 = [
//     {
//         id: 1,
//         name: "amin",
//         favorite,
//     }
// ] as const;


// users1[0].favorite.push("coding");

// let actions = [
//     { type: "ADD" },
//     { type: "REMOVE" },

// ] as const;

// for (const action of actions ) {
//     if (action.type === "CREATEAD") {     /////////error is loading///////
//         console.log("CREATEAD")
//     } else {
//         console.log("REMOVEs");
//     }
// }

// //////////////////////////////////////////

// const numbersssss = [12, 13] as const;

// // numbersssss.push(15); ///////error///
// const linkElem = document.querySelector(".link") as HTMLAnchorElement; /////////////tashkhis in exist elemenet
// const useName = <HTMLInputElement>document.querySelector("input");
// const useName2 = document.querySelector("input")!;

// console.log(useName?.className);

// //////////////////////////////

// enum Role {
//     admin ,
//     user
// };

// const userName12: {
//     id: number;
//     name: string;
//     age: number;
//     role: Role;
// } = {
//     id: 1,
//     name: "m",
//     age: 20,
//     role: Role.admin
// } as const;

// if (userName12.role === Role.admin) {
//     console.log("access")
// } else {
//     console.log("no access")
// }

// //////////////////////////////////////////

// const sumation = (num: number, num2: number) : number => {
//     return (
//         num + num2 
//     )
// }


// const logger = (param): void => {
//     console.log(param)
//     //////function is not return any think
// };

// const looger = (): undefined => {
//     return undefined;
// };

// /////////////////////////////////////////

// const sumation2 = (num1: number, num2: number) :number => {
//     return num1 + num2
// }

// let finc : (num1: number, num2: number) => number  ;

// finc = sumation2;

// finc = 10 ///////error///

// ////////////////////////////////////////


// type combine = number | string

// type BoolOrNum = boolean | number;

// let item1: combine | BoolOrNum = 12;
// let item2: combine = 13;
// let item3: combine = 14;

// /////////////////////////////////

// let res: null = null;

// type ali = {
//     id: 1, name: "ali", age: 20
// };
// type amin = {
//     id: 2, name: "amin", age: 25
// };

// type admin = ali | amin;

// const adminLoginHnadler = (admin: admin) => {
//     switch (admin.name) {
//         case "ali": 
//             {
//                 return `ali login`
//             }  
//         case "amin":
//             {
//                 return `amin login`
//             }
//         default:
//             let NeverVar: never = admin;
//             return NeverVar;
//     }
// }

// ///////////////////////////////////








