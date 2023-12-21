function findRotatedIndex(array,val,leftIdx=0,rightIdx=array.length-1) {
    let middleIdx = Math.floor((leftIdx + rightIdx)/2)
    if(array[middleIdx] === val){
        return middleIdx
    }
    if(array[middleIdx] < array[rightIdx]){
        if (array[middleIdx] < val && val <= array[rightIdx]) {
            return findRotatedIndex(array, val, middleIdx+1, rightIdx);
        } 
        else {
            return findRotatedIndex(array, val, leftIdx, middleIdx-1);
        }   
    }
    if(array[leftIdx] < array[middleIdx]){
        if (array[leftIdx] <= val && val < array[middleIdx]) {
            return findRotatedIndex(array, val, leftIdx, middleIdx-1);
        }
        else {
            return findRotatedIndex(array, val, middleIdx+1, rightIdx);
        }
    }
    return -1;
}
 
module.exports = findRotatedIndex


