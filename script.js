// let errorFirst=()=>{
//     try{

//         throw new Error("the numbers are undefine");
//         return a+b;

//     }catch(e){
//         console.log(e);
//     }
// };

// errorFirst();

// let error2=(a,b)=>{
//     try{
//         if(b!==0){
//             return a/b
//         }
//         else{
//             throw new Error("divided by zero error");
//         }
//     }catch(e){
//         return e;
//     }
// };

// console.log(error2(1,2));
// console.log(error2(1,0));



// const error3=() => {
//     try {
//         console.log("in try");
//         throw new Error("error 4");
//         console.log("this will not print");
//     }catch{
//         console.log("in catch");
//     }finally{
//         console.log("in finally");
//     }
// };
// error3();


let error5= input =>{
    try{
        if (input.length >0) {
            console.log("THE INPUT TEXT IS NOT EMPTY");
        }else{
            throw new Error("THE INPUT TEXT IS EMPTY");
        }
    }catch(e){
        console.log(e);
    }
}

error5('hi');
error5('');
