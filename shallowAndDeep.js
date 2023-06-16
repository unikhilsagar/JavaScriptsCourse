//Shallow and deep copy examples
var a = {
    name:'nikhil',
    skill:'front'
}
var b = {...a};
console.log(a===b)
b.name = 'sai charan'
b.skill = 'testing'

console.log(a===b)

console.log('a = ',a,'b=',b)