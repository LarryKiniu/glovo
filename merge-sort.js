// Merge sort
// Divide the array into 2 - left and right
// Sort the left and sort the right
// Merge the sorted arrays

function merge(left, right){
    let result = [];
    while(left.length > 0 && right.length > 0){
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return result.concat(left.length ? left : right);
}

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5,4,3,2,1]));