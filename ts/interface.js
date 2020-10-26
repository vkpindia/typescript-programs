var Employee = /** @class */ (function () {
    function Employee() {
        this.empID = 0;
        this.fname = '';
        this.lname = '';
    }
    // public age: number = 0;
    Employee.prototype.printData = function () {
        var str = "Employee Details: " + this.empID + "  " + this.fname + ",  " + this.lname;
        console.log('str', str);
    };
    return Employee;
}());
var obj = new Employee();
obj.empID = 1024;
obj.fname = 'Ashok';
obj.lname = 'Kumar';
// obj.age = 25;
obj.printData();
