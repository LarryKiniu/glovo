// Quick sort
// Choose a pivot - usually the last element
// Partition the array into 2 - those elements that are smaller than the pivot on the left and those greater on the right of the pivot
// For each subarray, repeat until you only have one element

function swap(array, firstIndex, lastIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = temp;
}

function partition(array, start, end){
    let pivot = end;
    let i = start - 1;
    let j = start;

    while(j < pivot){
        if(array[j] > array[pivot]){
            j++;
        } else {
            i++;
            swap(array,j,i);
            j++;
        }
    }
    swap(array, i + 1, pivot)
    return i + 1;
}

function quickSort(array, start, end){
    if(start < end){
        let pivot = partition(array, start, end);
        quickSort(array, start, pivot - 1);
        quickSort(array, pivot + 1, end);
    }
    return array;
}

let myArray = [5,4,3,2,1]

console.log(quickSort(myArray, 0, myArray.length - 1));