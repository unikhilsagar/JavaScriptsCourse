let string = "hello world"
let arr = string.split(" ")
let revString = ""
for(let i = 0;i<=arr.length-1;i++){
    revString = revString + " " + resverseString(arr[i])
}
console.log(revString)

function resverseString(str){
    let result= ""
    for(let i = str?.length-1;i>=0;i--){
        result = result + str[i]
    }
    console.log(result)
    return result
}