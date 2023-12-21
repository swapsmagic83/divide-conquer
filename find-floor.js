function findFloor(array,val,leftIdx=0,rightIdx=array.length-1) {
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx+rightIdx)/2)
        if ((array[middleIdx] <= val ) && (array[middleIdx+1] > val || middleIdx == array.length-1)){
            return array[middleIdx]
        }
        if(array[middleIdx] > val ){
            return findFloor(array,val,leftIdx,middleIdx-1)
        }
        if(array[middleIdx] < val){
            return findFloor(array,val,middleIdx+1,rightIdx)
        }
    }
    return -1
}

module.exports = findFloor

