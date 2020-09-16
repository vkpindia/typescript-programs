function f1(): void {
    console.log('Welcome to typeScript function');
}

function f2(sanme: string): void {
    console.log('Welcome to:', sanme);
}

function f3(x: number, y: number): number {
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


function studentDetails(sid: number, sname: string, email?: string): void {
    console.log('sid', sid);
    console.log('sname', sname);
    if (email !== undefined) {
        console.log('email', email);
    }
}

studentDetails(1026, 'Scott', 'scott@gamil.com')


// Default Parameter
function courseDetails(csid: number, cname: string, duration: number = 30): void {
    console.log('csid', csid);
    console.log('cname', cname);
    console.log('duration', duration);
}

courseDetails(56, 'Angular');

function addition(...x: Array<number>): void {
    let sum: number = 0;
    x.map(item => {
        sum += item;
    });
    console.log('Addition:', sum);
}


addition(10, 40, 60, 80, 30, 67, 89);
addition(10, 40, 60);
addition(10, 40);