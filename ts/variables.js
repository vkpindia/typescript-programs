var sid = 1024;
var sname = 'Smith';
var course = 'Angular 10';
var isFeePaid = true;
var studentRecord = {
    sid: 1024,
    sname: 'Smith'
};
var subject = [
    'Hindi',
    'English',
    'Telugu',
    'Tamil'
];
var subject_1 = [
    'Hindi',
    'English',
    'Telugu',
    'Tamil'
];
var students = [
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

var employees = [1, 'Steve', true];
employees.push(2, 'Bill', false);
employees.map(function (emp) {
    console.log('emp', emp);
});

for (var i = 0; i < subject.length; i++) {
    console.log('Subject', subject[i]);
}

subject.map(function (sub) {
    console.log('Subject', sub);
});

console.log('sid:', sid);
console.log('sname:', sname);
console.log('course:', course);
console.log('isFeePaid:', isFeePaid ? 'Paid' : 'Not paid');
