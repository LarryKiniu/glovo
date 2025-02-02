// Iterative Selection Sort
// Starting from the first element, find the smallest element from the unsorted array and swap it with the first element
// Go to the 2nd element and repeat the above step

function selectionSort(array){
    for(let i = 0; i < array.length - 1; i++){
        let smallestElementIndex = i;
        // loop through the array and find the smallest element
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[smallestElementIndex]){
                smallestElementIndex = j;
            }
        };

        // swap 
        let temp = array[i];
        array[i] = array[smallestElementIndex];
        array[smallestElementIndex] = temp;
    }
    return array;
}
// 54321 => 12345
console.log(selectionSort([5,4,3,2,1]));