const sumAll = function(a, b) {
    if(typeof(a) !== typeof(1) || typeof(b) !== typeof(1)){
        return 'ERROR'
    }
    else if(b < a){
        [a, b] = [b, a]
    }
    if ( a < 0){
        return 'ERROR'
    }
    let ans = 0
    for(let i = a; i <= b; i++){
        ans += i
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
