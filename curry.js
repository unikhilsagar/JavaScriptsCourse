function x(x){
    return function(y){
        console.log(x * y)
    }
}
x(4)(3)