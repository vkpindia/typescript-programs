function f1() {
    console.log('Welcome to typeScript function');
}
function f2(sanme) {
    console.log('Welcome to:', sanme);
}
function f3(x, y) {
    var z = x + y;
    return z;
}
f1();
f2('Steve');
var sum = f3(10, 20);
console.log('sum', sum);
// Optional Parameter
// Default Parameter
// Rest parameter
function studentDetails(sid, sname, email) {
    console.log('sid', sid);
    console.log('sname', sname);
    if (email !== undefined) {
        console.log('email', email);
    }
}
studentDetails(1026, 'Scott', 'scott@gamil.com');
// Default Parameter
function courseDetails(csid, cname, duration) {
    if (duration === void 0) { duration = 30; }
    console.log('csid', csid);
    console.log('cname', cname);
    console.log('duration', duration);
}
courseDetails(56, 'Angular');
function addition() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var sum = 0;
    x.map(function (item) {
        sum += item;
    });
    console.log('Addition:', sum);
}
addition(10, 40, 60, 80, 30, 67, 89);
addition(10, 40, 60);
addition(10, 40);
