var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.empID = 1025;
        this.empName = 'Steve';
        this.empID = id;
        this.empName = name;
    }
    Employee.prototype.showData = function () {
        this.empID = 788;
        console.log('Employee ID', this.empID);
        console.log('Employee Name', this.empName);
    };
    return Employee;
}());
var obj = new Employee(5089, 'Ashok');
obj.showData();
