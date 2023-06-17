//Shallow and deep copy examples
var a = {
    name:'nikhil',
    skill:'front'
}
//shallow copy code example

var b = a

console.log("before changing ",a === b)

b.name = "sai charan"
b.skill = "testing"

console.log("after changing", a === b)

console.log("a=",a,"b=",b)