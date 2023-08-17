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