const display=document.querySelector(".display");
const numbers=document.querySelectorAll(".num");
const operators=document.querySelectorAll(".operator");
const equal=document.querySelector("#equals");
const clear=document.querySelector("#ac");
let tempValues="";


numbers.forEach((bt)=>{
    bt.addEventListener("click",()=>{
        display.textContent+=bt.textContent;
        tempValues+=bt.textContent;

    }
    )
});

clear.addEventListener("click",()=>{
    operand1=null;
    operand2=null;
    operator=null;
    display.textContent=null;
    tempValues="";
});
function ac(){
    console.log("ac")
    operand1=null;
    operand2=null;
    operator=null;
    numbers.forEach((bt)=>{
        bt.addEventListener("click",()=>{
            display.textContent=null;
            tempValues="";  
            display.textContent+=bt.textContent;
            tempValues+=bt.textContent;  
            
        },{once:true}
        )
    return
    });
    
}

operators.forEach((bt)=>{
    bt.addEventListener("click",()=>{
       if(operator==null ){
        operator=bt.textContent;
        operand1=tempValues;
        tempValues="";
        display.textContent+=operator;

       }else if(operator!=null ){
        operand2=tempValues;
        result=operate(operand1,operator,operand2);
        display.textContent=result;
        operand1=result;
        operator2=bt.textContent;
        display.textContent+=operator2;
        tempValues="";
        console.log("temp",tempValues)
       }
        
    })
});

equal.addEventListener("click",()=>{
    if(operator2==null){
        console.log("ck1")
        operand2=tempValues;
        result=operate(operand1,operator,operand2);
        display.textContent=result;
        ac();
        
    }
    else{
        console.log("temp value",tempValues);
        operand2=tempValues;
        result=operate(operand1,operator2,operand2);
        display.textContent=result;
        ac();
    }
}
);

let operand1=null;
let operator=null;
let operator2=null;
let operand2=null;
let result;

function operate(operand1,operator,operand2){


    console.log(operand1);
    console.log(operand2);
    console.log(operator);
    
    if(operator=="+"){
        return Number(operand1)+Number(operand2);
    }
    else if(operator=="-"){
        return operand1-operand2
    }
    else if(operator=="*"){
        return operand1*operand2;
        
    }
    else if(operator=="/"){
        return operand1/operand2; 
        
       }
  
    
};



