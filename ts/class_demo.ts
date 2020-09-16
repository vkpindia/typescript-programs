class Student {
        private sid: number = 2065;
        private sname: string = 'Steve';

        public showData(): void {
            console.clear();
            console.log('Student ID', this.sid);
            console.log('Student Name', this.sname);
        }
}

var obj = new Student();

obj.showData();


