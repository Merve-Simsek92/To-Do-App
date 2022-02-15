let check1=document.querySelector("#bir")
let label1=document.querySelector(".bir")
let check2=document.querySelector("#iki")
let check3=document.querySelector("#üç")
let check4=document.querySelector("#dört")
let check5=document.querySelector("#beş")
let check6=document.querySelector("#altı")

let label1=document.querySelector(".bir")
let label2=document.querySelector(".iki")
let label3=document.querySelector(".üç")
let label4=document.querySelector(".dört")
let label5=document.querySelector(".beş")
let label6=document.querySelector(".altı")

let result=document.querySelector(".result")
let label=[label1,label2,label3,label4,label5,label6]
let checkArray=[check1,check2,check3,check4,check5,check6];
for(let i=0;i<checkArray.length;i++){
checkArray[i].addEventListener("click",()=>{
label[i].setAttribute("style","text-decoration:line-through");

})}


