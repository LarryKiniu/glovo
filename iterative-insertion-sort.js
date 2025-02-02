// Insertion sort
// Assume the first element is sorted
// For every other element, if the element behind it is greater, shift that greater element 1 position up
// until you find the position to place the initial element

function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > key){
            //swap
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort([5,4,3,2,1]));
