// Binary search
// Get a mid point
// If the target is in the mid point - we found it
// If the target is greater than what's in the midpoint, move search to the right of mid-point
// If the target is smaller that what's in the midpoint, move search to the left of mid-point
// Repeat until target is found or list is exhausted

function binarySearch(array, target){
    let left = 0;
    let right = array.length - 1;
    let mid;
    while(right >= left){
        mid = left + Math.floor((right - left) / 2);
        if(array[mid] === target){
            return mid;
        } else if(array[mid] > target){
            right = mid - 1;
        } else if (array[mid] < target){
            left = mid + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 7));