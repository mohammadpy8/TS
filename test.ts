type Admin = {
    name: string;
    privolage: string[];
};

type TeacherNew = {
    name: string;
    statrDate: Date;
};

type TeacherAdmin = Admin & TeacherNew;

let aliReza: TeacherNew = {
    name: "moahmmad",
    statrDate: new Date(),
}

let ahmadReza: TeacherAdmin = {
    name: "mohammaddd",
    statrDate: new Date(),
    privolage: ["", ""],
};

type Type1 = string | number;
type Type2 = number | boolean;

const testVar10: Type1 & Type2 = 10;

//////////////////////////

const showProp = (member: Admin | TeacherNew) => {

    if ("statrDate" in member) {
        console.log(member.statrDate);
    } else if ("privolage" in member) {
        console.log(member.privolage);   
    }

    console.log(member.name);
};

const rezaaaa: TeacherNew = {
    name: "reza",
    statrDate: new Date(),
};

const amin: Admin = {
    name: "ggg",
    privolage: [""]
}

showProp(rezaaaa);
showProp(amin);