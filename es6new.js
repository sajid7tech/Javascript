// 'use strict';
console.log("Hello");

// let fun = (a,b) =>{
//     return a+b;
// }
// console.log(fun(10,10));

// ARRAY map, filter , reduce 
// Map

// function operation(a){
//     return a+2*a+3*a;
// }

// let arr=[1,2,3,4,5,6];
// let modified_arr = arr.map(operation);
// console.log(modified_arr);

//Reduce

// let operation = (a,b,c) => {
//     console.log(a,b,c);
//     return a+b+c;
// };
// function operation(a,b,){
//     console.log(a,b);
//     console.log(a+b);
//     return a+b*c;
// }

// let arr=[1,2,3,4,5,6];
// let modified_value = arr.reduce(operation);
// console.log(modified_value);

//filter 
// function operation(x){
//     // return (x%2==0);
//     if(x%2==0){
//         return false;
//     }else{
//         return true;
//     }
// }

// let arr=[1,2,3,4,5,6];
// let modified_value = arr.filter(operation);
// console.log(modified_value);

// Spread Operator

// let a = ["Sajid" , "Riyaz" , "Rohan" , "Ramesh" ,"karthik"]
// let b = {...a};
// console.log(b);

// Template Literals
// function maximum(x, y, z) {
//     var c = `${ (y>x && y>z) ? 'y' : `${x>z ? 'x' : 'z'}` }     `;
//     return (c);
//     }

//     console.log(maximum(90,20,30));

// Call  - we make a funtion that can be used by other object (reusable function)
let obj = {
    "first_name" : "Sajid",
    "last_name" : "Riyaz",
    
}
function fullname(city , state){
    console.log(this.first_name+" "+this.last_name + " From the city "+city +" and State is " +state );
}
let obj2 = {
    "first_name" : "Ramesh",
    "last_name" : "Kumar",
}
// fullname.call(obj2, "Kanpur","Up");
// fullname.call(obj ,"Lucknow","India");
// obj.fullname();

// apply - Same  as call but we pass the argument in array form 
// fullname.apply(obj ,["Lucknow","UP"]);

// Bind  - basiclly same as call but we bind the function with the object
let bindOutput = fullname.bind(obj ,"Lucknow","Up");
console.log(bindOutput);
bindOutput();