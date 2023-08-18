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
