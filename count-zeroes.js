function countZeroes(array) {
    let first = firstIdx(array)
    if (first == -1){
        return 0
    } 
    else{
    let count = array.length - first
    return count
    }
}
function firstIdx(array,leftIdx=0,righIdx=array.length-1){
    if(leftIdx<=righIdx){
        let middleIdx = Math.floor((leftIdx+righIdx)/2)
        if((middleIdx===0 || array[middleIdx-1]===1) && array[middleIdx]===0){
            return middleIdx
        }
        else if(array[middleIdx] === 1){
            return firstIdx(array,leftIdx=middleIdx+1,righIdx)
        }
        else {
            return firstIdx(array,leftIdx,righIdx=middleIdx-1)
        }
        
    }
    else{
        return -1
    }
}
  


 module.exports = countZeroes