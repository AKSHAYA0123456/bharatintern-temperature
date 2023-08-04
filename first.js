let f=document.getElementById("btn1");
let c=document.getElementById("btn2");
let k=document.getElementById("btn3");
let i=document.getElementById("value");
let t=document.getElementById("text");

function far(){
    let v=i.value;
    let value=(v-32)*(5/9);
    t.textContent="Fahrenheit value is : "+value+" F";
    if (v===""){
        t.textContent="Please enter a value"
    }
}
function cel(){
    let v=i.value;
    let value=(v*(9/5))+32;
    t.textContent="Celsius value is : "+value+" C";
    if (v===""){
        t.textContent="Please enter a value"
    }
}
function kel(){
    let v=i.value;
    let value=(v-273.15)*(9/5)+32;
    t.textContent="Kelvin value is : "+value+" K";
    if (v===""){
        t.textContent="Please enter a value"
    }
}
