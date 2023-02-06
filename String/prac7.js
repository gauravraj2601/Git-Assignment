// reverse the string;
let str= "masai";
let a="";
for (let i=str.length-1; i>=0; i--){
  a=a+str[i]
}
console.log(a) //iasam

let strr= "gauravG"
let l= strr.length;
let h= l/2;
let st="";
let stt="";
if (l%2==0){
  for (i=h-1; i>=0; i--){
    st=st+strr[i]
  }
  for (let j=strr.length-1; j>=h; j--){
    stt+=strr[j]
  }
  console.log(st+stt);
}   
  