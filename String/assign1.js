// find out how many words in a;
let a= "masai school masai school";

let space=0;
for (let i=0; i<a.length; i++){
  if(a[i]==" "){
    space++
  }
}
console.log("words=",space+1)