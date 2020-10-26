interface ITest{
    fname: string;
    lname: string;
    age: number;
    printData(): void;
}

class Employee implements ITest {
    public empID: number = 0;
    public fname: string = '';
    public lname: string = '';
    public age: number = 0;

    public printData(): void{
        let str = `Employee Details: ${this.empID}  ${this.fname},  ${this.lname}  ${this.age}`;
        console.log('str', str);
    }   
}

var obj = new Employee();
obj.empID = 1024;
obj.fname = 'Ashok';
obj.lname = 'Kumar';
obj.age = 25;

obj.printData();