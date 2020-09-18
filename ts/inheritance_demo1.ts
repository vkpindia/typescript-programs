// Single Inheritance
// Multilevel Inheritance,
// multiple inheritance
// Hierarchical Inheritance
// Hybrid Inheritance

/* class Person {
    public pName: string;
    public pAge: number;
}

class Student extends Person {
    public sid: number;
    public course: string;

    public showStudentDetails() {
        console.log('Student Name', this.pName);
        console.log('Student Age', this.pAge);
        console.log('Student ID', this.sid);
        console.log('Student Course Name', this.course);
    }
}

var stuObj = new Student();

stuObj.pName = "Ashok kumar";
stuObj.pAge = 25;
stuObj.sid = 1024;
stuObj.course = 'Angular';

//method call
stuObj.showStudentDetails(); */


// to using the contructor properties

class Person {
    public pName: string;
    public pAge: number;

    constructor(name: string, age: number) {
        this.pAge = age;
        this.pName = name;
    }
}

class Student extends Person {
    public sid: number;
    public course: string;

    constructor(id, scourse, name, age) {
        super(name, age);

        this.sid = id;
        this.course = scourse;
    }

    public showStudentDetails() {
        console.log('Student Name', this.pName);
        console.log('Student Age', this.pAge);
        console.log('Student ID', this.sid);
        console.log('Student Course Name', this.course);
    }
}

var stuObj = new Student(1057, "Angular 10", "Ashok kumar", 25);

/* stuObj.pName = "Ashok kumar";
stuObj.pAge = 25;
stuObj.sid = 1024;
stuObj.course = 'Angular'; */

//method call
stuObj.showStudentDetails();