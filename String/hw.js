let str= "go%.a$.";
let a="";
for (let i=0; i<str.length; i++){
  if(str[i]=="%"){
    a+="h"
  }
  else if(str[i]=="$"){
    a+="n";
  }
  else if(str[i]=="."){
    a+="";
  }
  else{
    a+=str[i]
  }
}
console.log(a)