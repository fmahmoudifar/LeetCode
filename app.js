// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let temp = 0;
    let tempArr =[];
    for(let i=0; i<nums.length; i++) {
        console.log(nums[i])
       for(let j=0; j<nums[i].length; j++) { console.log(nums[j])
          temp = nums[i] +nums[j];
           if (temp === target) {
          return nums.indexOf(i)
               tempArr.push(indexOf(nums[i]));
               tempArr.push(nums[j]);
               //return tempArr;
               break;
              } 
           
       } 
       } console.log(tempArr)
    
    console.log(nums) 
   // return nums
};
