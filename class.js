"use strict";
class Person {
    // public name: string;
    // email: string;
    // age: number;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const aliPerson = new Person("ali", "al", 12);
///////////////////////////////////////////////
const testPerson = aliPerson;
const persons = [aliPerson];
class Student extends Person {
    constructor(name, email, age, lessons) {
        super(name, email, age);
        this.lessons = lessons;
        Student.count++;
    }
    static getCount() {
        return Student.count;
    }
    get getLessons() {
        return this.lessons;
    }
    set addLessons(lesson) {
        this.lessons.push(lesson);
    }
    info() {
        return "";
    }
}
Student.count = 0;
class Teacher extends Person {
    constructor(name, email, age, lessons) {
        super(name, email, age);
        this.lessons = lessons;
        Student.count++;
    }
    static getCount() {
        return Student.count;
    }
    get getLessons() {
        return this.lessons;
    }
    set addLessons(lesson) {
        this.lessons.push(lesson);
    }
    info() {
        return "";
    }
}
Teacher.count = 0;
const aliStudent = new Student("ali", "ali@", 20, [""]);
const mohammadAmir = new Teacher("", "", 21, [""]);
aliStudent.age = 25;
console.log(aliStudent);
/////////////////////////////
