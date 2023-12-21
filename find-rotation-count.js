function findRotationCount(array,leftIdx=0,rightIdx=array.lenght-1) {
    if(array[leftIdx]<=array[rightIdx]){
        return leftIdx
    }
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx+rightIdx)/2)
        if(middleIdx-1 >= 0 && (array[middleIdx] < array[middleIdx-1])){
            return middleIdx
        }
        if(array[middleIdx] > array[rightIdx]){
            return findLowestNum(array,middleIdx+1,rightIdx)
        }else{
            return findLowestNum(array,leftIdx,middleIdx-1)
        }
    }
    return -1
}

module.exports = findRotationCount
