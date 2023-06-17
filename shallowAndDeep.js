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

//logging result in console
console.log("after changing", a === b)

console.log("a=",a,"b=",b)

//deep copy example
var b = {...a};
console.log(a===b)
b.name = 'sai charan'
b.skill = 'testing'

var b = a

console.log('a = ',a,'b=',b)

//JSON parse 
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]

