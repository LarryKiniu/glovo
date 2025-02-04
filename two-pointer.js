/*
* Given a sorted array arr (sorted in ascending order) and a target, find if there exists any pair of elements (arr[i], arr[j]) such that their sum is equal to the target.
*/
// Two pointer technique
// Initialize 2 pointers , one at the beginning of the array and one at the end
// Get the sum of elements, if the sum is equal to the target, return true
// If the sum is less than the target, increment the left pointer
// if the sum is greater than the target, decrement the right pointer

function twoPinter(array, target){
    let left = 0;
    let right = array.length - 1;
    
    while(left < right){
        let sum = array[left] + array[right];

        if(sum === target){
            return true;
        }
        if(sum < target){
            left++;
        } else {
            right--;
        }
    }

    return false;
}

console.log(twoPinter([1,2,3,4,5,6,7,8], 20))