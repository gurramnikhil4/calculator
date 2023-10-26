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
    symbolLast=true;
    }
    op=symbol.textContent;
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

function operate(x,y,o){
    x=Number(x);
    y=Number(y);
    if(!o)return x;

    if(symbolLast)y=x;
    switch(o){
        case '+':{
            return x+y;
        }
        case '-':{
            return x-y;
        }
        case 'x':{
            return x*y;
        }
        case '/':{
            if(y==0)return NaN;
            return x/y;
        }
        case '%':{
            if(y==0)return NaN;
            return x%y;
        }
    }
}