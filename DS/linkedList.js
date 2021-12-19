class Node{
    constructor(value, next){
        this.value = value,
        this.next = next
    }
} 

class LinkedList{
    constructor(){
        this.head = null,
        this.length = 0,
        this.tail = null
    }

    insertAtStart = (value) => {
        let n = new Node(value, this.head)
        this.head = n
        // console.log("n==============",n)
        this.length++        
    }

    insertAtEnd = (value) => {
        if(!this.head){
            this.insertAtStart(value)
        }
        else{
            let current = this.head         // Means full Node
            let previous

            while(current.next){            // Till the time next is present (it's != null)
                // console.log(current)
                previous = current
                current = current.next     // Dive inside object and keep setting new next as lastNode
            }
            if(current.next == null){      // The moment last next if found (next == null)
                current.next = new Node(value, null)         // Create a new node in that last next 
                                                             // ### current.next ==== LAst nODE of Linked List ###
                this.length++
            }
        }
    }


    deleteAtStart = () => {
        if(!this.head){
            return
        }
        this.head = this.head.next
        this.length--
        // console.log(this.head)
    }

    deleteAtEnd = () => {
        let current = this.head
        let previous 

        while(current.next){
            previous = current
            current = current.next
            console.log(previous)
        }
        if(current.next == null){
            previous.next = null
            console.log("deleted ====== ", current.value)
            this.length--
        }
    }




    insertAt = (value, index) => {

        if(index < 0 || index >= this.length){
            console.log("Out of bounds index :(")
            return
        }

        let current = this.head
        let previous
        let count = 0

        while(count < index){
            previous = current
            current = current.next
            count++
        }

        let node = new Node(value, index)
        previous.next = node
        node.next = current    
    }



    deleteAt = (index) => {
        if(index >= this.length) return

        else if(index == 0){
            this.deleteAtStart(index)
            return
        }

        let current = this.head
        let previous
        let count = 0
        while(count < index){
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
    }



    print = () => {
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

    // printEvens = () => {
    //     let nodes = this.head
    //     while(nodes){
    //         if(nodes.value % 2 == 0){
    //             console.log(nodes.value)
    //         }
    //         nodes = nodes.next
    //     }
    // }

}


let ll = new LinkedList()

for (let i = 1; i <= 10; i++) {
    ll.insertAtStart(i)   
}

// ll.insertAtEnd(400)

// ll.deleteAtStart()
// ll.deleteAtEnd()

// ll.insertAt(10, 5)

ll.print()
ll.deleteAt(0)
console.log("======================")
ll.print()

// ll.printEvens()



