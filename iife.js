const add = (function(){
    var counter = 0;
    return function(){
        counter = counter + 1;
        console.log(counter)
        return counter
    }
})()
console.log(add)
console.log(add())
console.log(add())
console.log(add())
console.log(add.__proto.__)