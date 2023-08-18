type Admin1 = {
    type: "ADMIN";
    name: string;
    privily: string;
};

type Teacher2 = {
    type: "TEACHER";
    name: string;
    startDate: Date;
};

const showUsers = (member: Admin1 | Teacher2) => {
    switch (member.type) {
        case "ADMIN": {
            console.log(member.privily);
            break;
        }
        case "TEACHER": {
            console.log(member.startDate);
            break;
        }
        default: {
            throw new Error("invalid member");
        }
    }
};

///////////////////////////////////////

type param = string | number;

function addto(param1: number, param2: number): number;
function addto(param1: string, param2: string): string;

function addto  (param1: param, param2: param) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    } else if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
};

const reesult = addto("mohammad", "amin") as string;

reesult.split("");

console.log(reesult);

//////////////////////////////////

interface Errors {
    name: string;
    email: string,
    password: string;
};

interface Erros10 {
    type: string;
    [prop: string] : string| number
};

const LoginFormError1: Erros10 = {
    type: "",
    name: "name ",
    email: "email",
    password: "",
    adders: "",
    city: "",
};

const registerForms: Erros10 = {
    type: "login",
    username: 10,
    password: 123456,
};
/////////////////////////////

namespace IranKhodro {
    export let car = "pars";

    export class Body {
        constructor(
            public color: string,
            public name: string,
        ) {
            this.name = name;
            this.color = color;
        }
        make() {
            console.log("success");
        };
    } 
};

namespace saipa {
    export let car = "pride";
};

const pars111 = new IranKhodro.Body("mm", "red");

pars111.make();

console.log(IranKhodro.car);
console.log(saipa.car);


