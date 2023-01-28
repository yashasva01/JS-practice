let name = {
    firstName: "Yashasva",
    lastName: "Sharma",
};


let printFullName = function(homeTown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown + ', ' + state);
};

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
};
printFullName.call(name, 'KOTA', 'Rajashtan');
printFullName.apply(name2, ['Mumbai', 'Maharashtra']);
let printMyName = printFullName.bind(name, 'KOTA', 'Rajashtan');
printMyName();
