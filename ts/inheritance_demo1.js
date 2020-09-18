// Single Inheritance
// Multilevel Inheritance,
// multiple inheritance
// Hierarchical Inheritance
// Hybrid Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.pAge = age;
        this.pName = name;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, scourse, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.sid = id;
        _this.course = scourse;
        return _this;
    }
    Student.prototype.showStudentDetails = function () {
        console.log('Student Name', this.pName);
        console.log('Student Age', this.pAge);
        console.log('Student ID', this.sid);
        console.log('Student Course Name', this.course);
    };
    return Student;
}(Person));
var stuObj = new Student(1057, "Angular 10", "Ashok kumar", 25);
/* stuObj.pName = "Ashok kumar";
stuObj.pAge = 25;
stuObj.sid = 1024;
stuObj.course = 'Angular'; */
//method call
stuObj.showStudentDetails();
