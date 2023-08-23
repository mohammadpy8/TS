type User = {
    username: string;
    email: string;
    age: number;
};

type RequiredUser = Required<User>;

type ReadonlyUser = Readonly<User>;

type PartialUser = Partial<User>;

type PickType = Pick<User, "username" | "email">;

type Type1 = number | string | boolean | null | undefined;

type Type2 = NonNullable<Type1>

const ali: User = { username: "alireza", email: "", age:50 };
const amin: RequiredUser = { username: "alireza", email: "", age: 10 };
const amir: ReadonlyUser = { username: "alireza", email: "", age: 10 };
const ramin: PartialUser = { username: "alireza", email: "", age: 10 };
const babak: PickType = { username: "alireza", email: "" };

const var1: Type1 = null;

const var2: Type2 = 10; /////not null and undefined////

amir.age = 12; ////Error

type Type3 = Exclude<Type1, Function | Boolean | String>;

type Type4 = Omit<User, "age" | "email">;

type Type5 = "Ali" | "Amin" | "Mohammad";

type Person = {
    name: string;
    age: number;
    email: string;
};

type RecordType = Record<Type5, Person>;

const Prson550: RecordType = {
    "Amin": { name: "amin", email: "", age: 10 },
    "Ali": { name: "ali", age: 25, email: "" },
    "Mohammad": { name: "mohammad", age: 15, email: "" }
};

const car10: Type3 = 10; 
const ali150: Type4 = { username: "ali150" }; 


