let num=1;
let sum=0;
let c=0;
while (num<=100){
  if (num%2==0){
    c=c+1;
    sum=sum+num;
  }
  num++;
}
// console.log(sum);
// console.log(c);
let avg= sum/c;
console.log(avg)