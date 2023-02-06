let a= "masai school";
// find out how many words in a;
let space=0;
for (let i=0; i<a.length; i++){
  if(a[i]==" "){
    space++
  }
}
console.log("words=",space+1)
//
let arr=["luffy","zoro","suffyi"]

console.log(arr[1][0]) // z
//           zoro->o
console.log(arr[0].length)// 5

// let arr=["luffy","zoro","suffy"]
let sum=0;
for(let i=0; i<arr.length; i++){
  sum+=arr[i].length
}
console.log(sum)