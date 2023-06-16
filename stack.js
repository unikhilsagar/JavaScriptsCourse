//Stack
class Stack{
    constructor(){
        this.items= []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.size
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
stack.pop()
stack.pop()
stack.print()


