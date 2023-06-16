//Queue
class Queue{
    constructor(){
        this.items = []
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()

queue.dequeue()
queue.dequeue()
queue.print()