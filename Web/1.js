// let age = 18
// console.log(age > 18 ? "Eligible" : "Not eligible");

// // let mode = "light";
// // let color;
// // if (mode === "dark") {
// //     color = "Black"
// // }
// // else{
// //     color = "White"
// // }

// // let result = color;
// // console.log(result);

// const myHeading = document.querySelector("strong");
// myHeading.textContent = "Fuck off";


// let number1 = parseFloat(prompt("Enter number1: "));
// let operand = prompt("Enter operand: ");
// let number2 = parseFloat(prompt("Enter number2: "));

// if (operand == "+"){
//     console.log(number1 + number2);
// }
// else if (operand == "-"){
//     console.log(number1 - number2);
// }
// else if (operand =="*"){
//     console.log(number1 * number2);
// }
// else if (operand == "/"){
//     console.log(number1 / number2);
// }
// else {
//     console.log("Invalid Operand")
// }


// // for(let i = 2; i <=100; i = i + 2 ){
// //     console.log(i);
// // }

// let str="Piyush";
// console.log(str.toUpperCase(str));

// let fullName = prompt("Enter your Fullname without spaces: ");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);

const std1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0; i<std1.length; i++){
    sum += std1[i]
}
console.log(sum/std1.length)
