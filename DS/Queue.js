class Queue{
    constructor(){
        this.value = []
        this.length = 0
        this.head = null
        this.tail = null
    }

    add = (value) => {
        this.value[this.length] = value
        console.log(value, "added")
        if(this.length == 0){
            this.head= value 
            this.tail = value
            this.length++
            // console.log(this.head, this.tail, "if........")
        }
        else{
            this.head = this.value[0]
            this.tail = value
            this.length++
            // console.log(this.head, this.tail, "else.....")
        }   
        
    }

    delete = () => {
        console.log(this.head, "deleted")
        this.head = this.value[this.value.indexOf(this.head) + 1]
    }



    print = () => {
        let queueIndex = this.value.indexOf(this.head)
        console.log("Queue contains - ")
        for (let i = queueIndex; i < this.length; i++) {
            console.log(this.value[i])            
        }
        console.log("head", this.head, "  tail", this.tail)
    }


}


let q = new Queue()
q.add(10)
q.add(20)
q.add(30)
q.add(40)
q.add(50)
q.add(60)


// q.print()


q.delete()
q.delete()
q.delete()


q.print()


