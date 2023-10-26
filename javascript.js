let numberList=document.querySelectorAll(".number");
numberList.forEach((number)=>
number.addEventListener('click',numberListner));

function numberListner(e){
    if(!op){
        var1+=e.target.textContent;
        result=var1;
    }else{
        var2+=e.target.textContent;
        result=var2;
        symbolLast=false;
        
    }
    updateDisplay();
    e.preventDefault();
};

let symbolList=document.querySelectorAll('.symbol');
symbolList.forEach((symbol)=>{
symbol.addEventListener('click',()=>{
    if(op){
    result=operate(var1,var2,op);
    var1=result;
    updateDisplay();
    var2="";
    }
    op=symbol.textContent;
    symbolLast=true;
});});

let equal=document.querySelector('.equal');
equal.addEventListener('click',()=>{
    result=operate(var1,var2,op);
    var1=result;
    updateDisplay();
    console.log(var1,var2,result,op);
});

let display=document.querySelector('.display');
function updateDisplay(){
    display.textContent=result;
}
function getDisplay(){
    return display.textContent;
}

let clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    var1="";
    var2="";
    op=null;
    result=0;
    updateDisplay();
});

let var1="", var2="", op="",result=null, symbolLast=false;

function operate(){
    if(!op)return var1;
    // if(symbolLast)var2=var1;

    switch(op){
        case '+':{
            return Number(var1)+Number(var2);
        }
        case '-':{
            return Number(var1)-Number(var2);
        }
        case 'x':{
            return Number(var1)*Number(var2);
        }
        case '/':{
            if(Number(var2)==0)return NaN;
            return Number(var1)/Number(y);
        }
        case '%':{
            if(Number(y)==0)return NaN;
            return Number(var1)%Number(y);
        }
    }
}