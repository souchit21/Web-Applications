const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl =  document.getElementById("upper");
const lowerEl=  document.getElementById("lower");
const numberEl=  document.getElementById("number");
const symbolEl=  document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const symbols =  "!@#$%^&*()_-+=";
const numbers = "0123456789"

function getUpperCase(){
return upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
}
function getLowerCase(){
return    lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)];
}
function getNumber(){
return     numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol(){
return    symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePass(){
    const len  = lenEl.value;
    let password ="";
    if(upperEl.checked){
        password+=getUpperCase();
    }
    if(lowerEl.checked){
        password+=getLowerCase();
    }
    if(numberEl.checked){
        password+=getNumber();
    }
    if(symbolEl.checked){
        password+=getSymbol();
    }

    for(let i=password.length; i<len; i++){
        const x = generateX();
     password+=x;
    }
pwEl.innerText = password;
}
function generateX(){
    const X = [];
    if(upperEl.checked){
        X.push(getUpperCase());
    }
    if(lowerEl.checked){
        X.push(getLowerCase());
    }
    if(numberEl.checked){
        X.push(getNumber());
    }
    if(symbolEl.checked){
        X.push(getSymbol());
    }
    if(X.length===0){
        return "";
    }
    return X[Math.floor(Math.random() * X.length)];
}
generateEl.addEventListener("click", generatePass);


copyEl.addEventListener("click", ()=>{
    const textarea= document.createElement("textarea");
    const password = pwEl.innerText;
    if(!password){
        return;
    }

    textarea.value = password;
    textarea.select();
    navigator.clipboard.writeText(password);
    textarea.remove();
    alert("Password Copied");
} )