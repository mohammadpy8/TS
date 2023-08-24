import { Length, isNotEmpty} from "class-validator";

class User {

    @Length(8, 20)

    fierstName: string;
    lasrName: string;
    userName: string;
    email: string;
    age: number;

    constructor(
        fierstName: string,
        lasrName: string,
        userName: string,
        email: string,
        age: number,
    ) {
        this.fierstName = fierstName;
        this.lasrName = lasrName;
        this.userName = userName;
        this.email = email;
        this.age = age;
    }
}