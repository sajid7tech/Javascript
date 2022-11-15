// const func = (a,b,c)=> {
//     return a+b+c;
// }
// console.log(func(5,6,7));

// const func1 = (a,b) => a+b;
// console.log(func1(5,6));

// const func2 = () =>{
//     console.log("The Game is Always be right");
// }
// func2(); // Normal Funtion 

// function Greet(){
//     console.log("Hey Convert to IIFS");
// }
// Greet();
// (function iifs(){console.log("hello i am in IIFS")})(); // IIFS funtion 


// callBack

// const display = () => console.log("Hello");
// const call1 = (a,b,callback)=>{
//     console.log("the Sum of "+ a +" and" + b +" is " + (a+b))
//     callback();
// }
// call1(10,5,display);

// Closure

// function foo(){

//     // let display = () =>{
//     //     console.log("Me in display");
//     //     console.log("Returning from display");
//     // }
//     // return display;
//     var a=1;
//     function inner(){
//         return a;
//     }
//     return inner;
// }

// let get_inner_fun = foo();
// console.dir(get_inner_fun);
// console.log(get_inner_fun());

function foo (outer_var){
    function innerHuMai(inner_var){
        return outer_var+inner_var;
    }
    return innerHuMai;
}

let get_inner_fun = foo(5);
console.log(get_inner_fun);
console.log(get_inner_fun(10));