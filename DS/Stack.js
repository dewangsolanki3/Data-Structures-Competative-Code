class Stack{
    constructor(){
        this.value = []
        this.length = 0
    }

    add = (value) => {
        this.value[this.length] = value
        console.log(this.value[this.length], "Added at index " + this.length)
        this.length++
    }

    delete = () => {
        let itemDeleted = this.value[this.length - 1] 
        console.log(itemDeleted, "removed from index " + (this.length - 1))
        this.length--
    }

    print = () => {
        let index = 0
        while(index <= this.length-1){
            console.log(this.value[index])
            index++
        }
    }

    peek = () => {
        console.log(this.value[this.length-1], "is at Top of Stack with index " + (this.length-1) )
    }
    
}


let stack = new Stack()
stack.add(10)
stack.add(20)
stack.add(30)
stack.add(40)
stack.add(50)

stack.delete()
stack.delete()


stack.peek()


// stack.print()

