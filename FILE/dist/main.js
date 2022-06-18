"use strict";
let myName;
let main;
main = [
    "Ade", "Emma", "Chima"
];
myName = "Chima";
let myTaught;
let ageMate;
let isRole;
const letter = {
    myTaught: "Gambi",
    ageMate: 67,
    isRole: true
};
console.log(letter.myTaught);
console.log(main[0]);
if (myName.length === 4) {
    console.log("True");
}
else {
    console.log("False");
}
function myArr(num, num2, fact) {
    let result;
    if (typeof num === "number" && typeof num2 === "number" && typeof fact === "boolean") {
        result = num + num2;
    }
    else {
        result = num.toString() + num.toString();
    }
    return result;
}
const answer = myArr(5, 6, true);
console.log(answer);
