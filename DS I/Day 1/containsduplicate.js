/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    dup = 0;
    
    nums.sort();
    
    for (i = 1; i < nums.length; i++){
        if (nums[i] == nums[i - 1]){
            dup ++;
        }
        
    }
    
    return dup != 0;
    
};