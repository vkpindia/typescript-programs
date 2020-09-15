var sid: number = 1024;
let sname: string = 'Smith';
let course: string = 'Angular 10';
var isFeePaid: boolean = true;

var studentRecord: any = {
    sid: 1024,
    sname: 'Smith'
};

var subject: Array<string> = [
    'Hindi',
    'English',
    'Telugu',
    'Tamil'
];

var subject_1: string[] = [
    'Hindi',
    'English',
    'Telugu',
    'Tamil'
];

var students: Array<any> = [
    {
        sid: 1024,
        sname: 'Smith'
    },
    {
        sid: 1024,
        sname: 'Smith'
    },
    {
        sid: 1024,
        sname: 'Smith'
    }
];

var employees: [number, string, boolean] = [1, 'Steve', true];
employees.push(2, 'Bill', false);

employees.map(emp=>{
    console.log('emp', emp);
});

for (let i = 0; i < subject.length; i++) {
    console.log('Subject', subject[i]);
}

subject.map(sub => {
    console.log('Subject', sub);
});

console.log('sid:', sid);
console.log('sname:', sname);
console.log('course:', course);
console.log('isFeePaid:', isFeePaid ? 'Paid' : 'Not paid');