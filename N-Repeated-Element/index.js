var repeatedElements = function(nums){
    const seen = new Set();
    const repeated = new Set();
    for(let num of nums){
        if(seen.has(num)){
            repeated.add(num);
        }
        else{
            seen.add(num);
        }
    }
    return repeated.size > 0 ? [...repeated] : 'No repeated elements';
}

console.log(repeatedElements([2,3,4,3,2]));
