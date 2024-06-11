export class Sorter {

    collection: number[] | string

    constructor(collection: number[] | string) {
        this.collection = collection
    }

    sortCollection():void {
        const length = this.collection.length
        if (this.collection instanceof Array) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j+1]) {
                        let temp = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = temp
                    }
                }
            }
        }
        if (typeof this.collection === "string") {
            this.collection.split('')
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j+1]) {
                        let temp = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = temp
                    }
                }
            }
        }
    }
    
}

/* Note for future. If you are doing a union with numbers and strings you wil come across this typescript error

 collection: number[] | string

Error: Index signature in type 'string | number[]' only permits reading.

Typescript is telling us in its not so clear manner that we can get index values from strings just as we do with arrays but
we can do assign index value like we do with arrays.

In other words we can not assign values as shown below. This would work for arrays but not for string
    let temp = this.collection[j]
    this.collection[j] = this.collection[j+1]
    this.collection[j] = this.collection[j+1]

You need to use type guards when joining seperate but different types

How to check if type is an array:

if (this.collection instanceof Array) do this...


How to check if type is a string. We use this method to check primitives

if (typeof this.collection === "string") do this...

*/