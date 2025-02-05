/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtereArr = [];
    arr.forEach((element,index)=>{
        if(fn(element,index)){
            filtereArr.push(element)
        }else{
            return false
        }
    })  
    return filtereArr
};

//橘子的
// let filter = (arr, fn)=>{
//     const outputArr = [];
//  arr.forEach((elem, ind)=>{
//     if(fn(elem, ind)){
//         outputArr.push(elem);
//     }
//  })   
//  return outputArr;
// }