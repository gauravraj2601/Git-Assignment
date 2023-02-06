let N=178;
let i=1;
let c=0;
let d=0;
let e=0;
while (i<=N){
  if ((i>0) && (i<51)){
    c=(i*3);
  }  
  else if ((i>50) && (i<151)){
    d=(i*5);
  }
  else if (i>150){
    e=(i*10);
    
  }
  i++
}  
console.log(80+c+d)