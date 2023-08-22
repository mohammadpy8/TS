import isLoginForm, {number15, AddNew} from "./func";

console.log(isLoginForm({
    name: "",
    email: "",
    age: 10,
}));

const usenamemmm = number15;
console.log(usenamemmm);

console.log(AddNew(12, 20));

/////////////////////////////
function ecoStr (param : string){
    return param
}
function ecoNumber (param : number){
    return param
}

function echo<Type>(param: Type): Type {
    return param
}


const result15: string = ecoStr("js");
console.log(result15.length);

const finish: number = echo<number>(12);
console.log(finish);

const finish10: string = echo<string>("ts");
console.log(finish10);

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
};

const mergonj = merge({ name: "ali" }, { age: 23 });
console.log(mergonj.age);
console.log(mergonj.name);







