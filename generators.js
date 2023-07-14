function* generators(){
    yield 1
    yield 2
    yield 3
    return 4
    yield 5
}

for(let i in generators()){
    console.log(i)
}
let gen = generators()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())