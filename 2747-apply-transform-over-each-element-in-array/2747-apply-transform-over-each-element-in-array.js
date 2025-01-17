/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let test = []
    for(let i = 0; i <= arr.length -1 ; i++){
        let result = fn(arr[i], i);
        test.push(result);
    }
    return test
};

// var map = function(arr, fn) {
//     let test = [];
//     for(let i = 0; i < arr.length; i++) {  // 範圍修正
//         let result = fn(arr[i], i);  // 呼叫函數並傳入參數
//         if (result !== undefined) {   // 避免 undefined 的情況
//             test.push(result);
//         }
//     }
//     return test;
// };


//給定一個整數數組 arr 和一個映射函數 fn，傳回一個新數組，並對每個元素套用轉換。
//傳回的陣列應創建為 returnedArray[i] = fn(arr[i], i)。
//Please solve it without the built-in Array.map method.



