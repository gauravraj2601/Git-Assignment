for(let i=1; i<=10; i++){
  let a="";
  for (let j=1; j<=10; j++){
    if(j==1 || i==10){
      a=a+"*";
    }
    else if(i==1 || j==10){
      a=a+'*';
    }
    else{
      a=a+" ";
    }
    
  }
  console.log(a)
}