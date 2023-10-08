//LinkedList
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//Implementing linked list
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
//Hi nikhil....
    prepend(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.head = node
            
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    sayHello(){
        console.log('hello')
    }

    append(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('linked list is empty')
        } else {
            let curr = this.head;
            let linkedListValues = ``
            while(curr){
                linkedListValues = linkedListValues + `${curr.value} `
                curr = curr.next
            }
            console.log("linked list "+linkedListValues)
        }
    }
}

const linkedList = new LinkedList();
linkedList.print()
linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)

linkedList.print()

console.log(linkedList.getSize())
linkedList.append(40)
linkedList.append(50)
linkedList.append(60)

linkedList.print()