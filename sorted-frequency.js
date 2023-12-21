function sortedFrequency(arr,val) {
    let first=firstIdxOfVal(arr,val)
    if(first === -1) {
        return first
    }else{
    let last = lastIdxOfVal(arr,val)
   
    let occurences = (last-first)+1
    return occurences
    }   
}
function firstIdxOfVal(arr,val,leftIdx=0,rightIdx=arr.length-1){
    if(leftIdx<=rightIdx){
        let middleIdx= Math.floor((leftIdx+rightIdx)/2)
        if((middleIdx===0 || arr[middleIdx-1] < val) && arr[middleIdx] === val){
            return middleIdx
        }
        else if( arr[middleIdx] < val){
            return firstIdxOfVal(arr,val,leftIdx=middleIdx+1)
        }
        else {
            return firstIdxOfVal(arr,val,leftIdx,rightIdx=middleIdx-1)
        }    
    }
    else{
        return -1
    }
}
function lastIdxOfVal(arr,val,leftIdx=0,rightIdx=arr.length-1){
    if(leftIdx<=rightIdx){
        let middleIdx= Math.floor((leftIdx+rightIdx)/2)
        if((middleIdx === arr.length-1 || arr[middleIdx+1] > val) && arr[middleIdx] === val){
            return middleIdx
        }
        else if(arr[middleIdx]>val){
            return lastIdxOfVal(arr,val,leftIdx,rightIdx=middleIdx-1)
        }
        else{
            return lastIdxOfVal(arr,val,leftIdx=middleIdx+1,rightIdx)
        }
    }
    else{
        return -1
    }
}

module.exports = sortedFrequency