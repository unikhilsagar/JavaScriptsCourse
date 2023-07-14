function* generators(){
    yield 1
    yield 2
    return 3
    yield 4
}

for(let i in generators()){
    console.log(i)
    console.log(i)
}
let gen = generators()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())