let errorFirst=()=>{
    try{

        throw new Error("the numbers are undefine");
        return a+b;

    }catch(e){
        console.log(e);
    }
};

errorFirst();

let error2=(a,b)=>{
    try{
        if(b!==0){
            return a/b
        }
        else{
            throw new Error("divided by zero error");
        }
    }catch(e){
        return e;
    }
};

console.log(error2(1,2));
console.log(error2(1,0));



