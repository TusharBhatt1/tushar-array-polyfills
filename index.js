//Map
export function myMap(array,cb){
    const updatedArray=[]
    for(let i=0; i< array.length ; i++){
         updatedArray.push(cb(array[i]))
    }
    return updatedArray
    }
    
    //Filter
    export function myFilter(array,conditionCB){
        const updatedArray=[]
        for(let i=0;i<array.length ; i++)
        {
           if(conditionCB(array[i])) updatedArray.push(array[i])
        }
    return updatedArray
    }
    
    //Reduce
    
    export function myReduce(array,cb,initialValue){
        let result=initialValue;
        for(let i=0; i<array.length ; i++){
           result=cb(array[i],initialValue)
           initialValue=result
           
        }
        return result
    }
    
    