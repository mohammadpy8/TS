abstract class Person {
  // public name: string;
  // email: string;
  // age: number;

  public constructor(
    readonly name: string,
    readonly email: string,
    public age: number
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

   abstract info() : string

}

const aliPerson = new Person("ali", "al", 12);

///////////////////////////////////////////////

const testPerson: Person = aliPerson;

const persons: Person[] = [aliPerson];

class Student extends Person {

  static count: number = 0;  
  lessons: string[];

  constructor(name: string, email: string, age: number, lessons: string[]) {
    super(name, email, age);
    this.lessons = lessons;
    Student.count++
  }

  public static getCount() {
    return Student.count
}

  get getLessons() {
    return this.lessons
  } 

  set addLessons(lesson : string) {
    this.lessons.push(lesson)
  }

   info(): string{
    return ""
  }
}

class Teacher extends Person{
  static count: number = 0;  
  lessons: string[];

  constructor(name: string, email: string, age: number, lessons: string[]) {
    super(name, email, age);
    this.lessons = lessons;
    Student.count++
  }

  public static getCount() {
    return Student.count
}

  get getLessons() {
    return this.lessons
  } 

  set addLessons(lesson : string) {
    this.lessons.push(lesson)
  }

   info(): string{
    return ""
  }

}

const aliStudent = new Student("ali", "ali@", 20, [""]);

const mohammadAmir = new Teacher("", "", 21, [""]);

aliStudent.age = 25;

console.log(aliStudent);


/////////////////////////////


