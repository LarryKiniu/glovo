// Find a block size usually root of array length
// Find the block that might contain the target value
// Perform a linear search in the block to find the target

function jumpSearch(array, target){
    let len = array.length;

    // Find the block size for the jump
    let step = Math.floor(Math.sqrt(len));
    let blockStart = 0;
    let currentStep = step;

    while(array[Math.min(currentStep,len) -1] < target){
        // if we haven't found the target, we move to the next block
        blockStart = currentStep;
        currentStep += step;
        
        // if we have gotten to the end of the array, we haven't found our target
        if(blockStart >= len){
            return -1;
        }
    }

    while(array[blockStart] < target){
        // perform linear search on the block
        blockStart++;

        if(blockStart >= Math.min(currentStep, len)){
            return -1;
        }
    }

    if(array[blockStart] === target){
        return blockStart;
    } else {
        return -1;
    }
}

console.log(jumpSearch([1,2,3,4,5,6,7,8,9],1))