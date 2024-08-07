//rotate an array by k times
const arr = [1,2,3,4,5]
const k =3;
function rotate(arr,k){
     for(let i=0;i<k;i++){
         arr.push(arr[i])
     }
     for(let i=0;i<k;i++){
        arr.shift()
     }
     return arr
}
console.log(rotate(arr,k));
