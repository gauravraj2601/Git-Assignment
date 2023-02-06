let arr=[1,2,3,4,5];
let b=[];
for (i=arr.length-1; i>=0; i--){
  b.push(arr[i]);
}
console.log(b)
//
let a=[1,2,3,-1,-2,-3]

for (i=0; i<a.length; i++){
  if(a[i]<=0){
    a[i]=0;
  }
  else if(a[i]>=1){
    a[i]=1;
  }
}
console.log(a)