// how many even and odd;
let arr=[1,2,3,4,5,6];
let even=0;
let odd=0;
for (let i=0; i<arr.length; i++){
  if (arr[i]%2==0){
    even+=1;
  }
  else if (arr[i]%2==1){
    odd+=1
  }
}
console.log("even-",even,"odd-",odd)