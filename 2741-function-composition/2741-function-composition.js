/**
 * @param {Function[]} functions
 * @return {Function}
 */

let compose = function(functions){
    let a = functions;
    return function(x){
        for(let i = a.length -1; i >=0 ; i--){
            x = a[i](x)
        }
        return x
    }
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

