class Employee {
   empID: number = 1025;
   empName: string = 'Steve';

   constructor(id: number, name: string){
    this.empID = id;
    this.empName = name;
   }

   public showData() {
       console.clear();
       this.empID = 788;
       console.log('Employee ID', this.empID);
       console.log('Employee Name', this.empName);
   }
}


var obj: Employee = new Employee(5089, 'Ashok');

obj.showData();
