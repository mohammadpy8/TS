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

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    // return { ...obj1, ...obj2 };
    return Object.assign(obj1, obj2);
};

const mergonj = merge({ name: "ali" }, {age: 12});
console.log(mergonj.age);
console.log(mergonj.name);

///////////////////////////

function myFunc10<T extends string>(param: T): T {
    console.log(param.length)
    return param;
};

function echoTest1<T>(param: T[]): T {

    console.log(param.length);
    
    return param[0];
};

console.log(echoTest1([10, 12, 20]));

interface Width {
    length: number;
}

function echoTest2<T extends Width>(param : T) {
    
    console.log(param.length);

};









