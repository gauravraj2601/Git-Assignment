// max and min;
let arr=[1,2,-70,3,-30,4,5]

let min= +Infinity; // it will give us the highest value in javascript;

let max= -Infinity; // it will gives us the lowest value ;

for(let i=0; i<arr.length; i++){
  if(arr[i]<min){
    min=arr[i];
  }
  if (arr[i]>max){
    max=arr[i];
  }
}
console.log(min,max)