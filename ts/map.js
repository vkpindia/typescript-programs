/*
map(): this method in javascript creates an array by calling
a specific function on each element present in the parent array.
It is a non-mutating method.

Generally map() method is used to iterate over an array and calling
function on every elemnt of array
 
*/
var arr = [10, 20, 30, 50];
var emp = [
    { name: 'abc', salary: 20000 },
    { name: 'smith', salary: 40000 },
    { name: 'scott', salary: 60000 },
    { name: 'carry', salary: 80000 },
];
emp.forEach(function (elemnt) {
    elemnt.salary = elemnt.salary / 10;
});
console.log('emp', emp);
var twoDArray = [[10, 20, [87, 67, [67, 78, [67, 78, [67, 78]]]]], [30, 40], [50, 60]];
var temp = [];
for (var i = 0; i < emp.length; i++) {
    temp.push({ name: emp[i].name, salary: emp[i].salary / 10 });
}
console.log('temp', temp);
var neArr = emp.map(function (element, index) {
    element.salary = element.salary / 10;
    return element;
});
function nestedArray(arr) {
    arr.map(function (element) {
        if (Array.isArray(element)) {
            nestedArray(element);
        }
        else {
            console.log('element', element);
        }
    });
}
console.log('neArr', neArr);
nestedArray(twoDArray);
// console.log('newArray', newArray);
// console.log('arr', arr);
