
const test1 = 89
const test2 = 695
const test3 = 46288

function digPow(n, p){
    let array = Array.from(String(n),Number)
    let first = false
    let result = 0
    for(let i =0; i < array.length; i++){
        if(first){
           result= result + Math.pow(array[i],p+=1)
        }
        else{
            result= result +  Math.pow(array[i],p)
            first = true
        }
    }
    if(result % n === 0){
     result = result / n
    }
    else{
        result = -1
    }
    return result
}
digPow(test3,3)