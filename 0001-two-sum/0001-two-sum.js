/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length;i++){
        for(let j = i+1; j < nums.length;j++){
            if(target == nums[i]+nums[j]){
               return [i,j]
            }
        }
    }
};

//犯錯點
// 加了空陣列 想說要存進去 但其實不必
// 迴圈條件不能加上 = ，因為這陣列會真的跑長度 4，但j的情況是，i+1 所以會導致 undefined
// return 只要 i 跟 j 因為他們就是 index，如果 nums[i] 這樣會是真的求引述陣列的值