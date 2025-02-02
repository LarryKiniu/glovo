// Recursive Selection sort

function selectionSort(array, startingIndex = 0){
    // if we are at the end of the array, return the array
    if(startingIndex === array.length){
        return array;
    }
    // find smallest element from starting index to the end of the array;
    let smallestElementIndex = startingIndex;
    for(let i = startingIndex + 1; i < array.length; i++){
        if(array[i] < array[smallestElementIndex]){
            smallestElementIndex = i;
        }
    }

    // swap
    let temp = array[startingIndex];
    array[startingIndex] = array[smallestElementIndex];
    array[smallestElementIndex] = temp;
    return selectionSort(array, startingIndex + 1);
}

console.log(selectionSort([5,4,3,2,1]));