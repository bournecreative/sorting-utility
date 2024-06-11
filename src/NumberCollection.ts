import { Sortable } from "./sorter"

export class NumberCollection implements Sortable {
    
    collection: number[]
    
    constructor(collection: number[]) {
        this.collection = collection
    }

    get length() {
        return this.collection.length
    }

    compare(leftHand: number, rightHand: number) {
        return this.collection[leftHand] > this.collection[rightHand]
    }

    swap(leftHand: number, rightHand: number) {
        let temp = this.collection[leftHand]
        this.collection[leftHand] = this.collection[rightHand]
        this.collection[rightHand] = temp
    }
}