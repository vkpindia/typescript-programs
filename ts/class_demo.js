var Student = /** @class */ (function () {
    function Student() {
        this.sid = 2065;
        this.sname = 'Steve';
    }
    Student.prototype.showData = function () {
        console.clear();
        console.log('Student ID', this.sid);
        console.log('Student Name', this.sname);
    };
    return Student;
}());
var obj = new Student();
obj.showData();
