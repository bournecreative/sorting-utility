export class Sorter {

    collection: number[]

    constructor(collection: number[]) {
        this.collection = collection
    }

    sortCollection() {
        const sorted = this.collection.sort((a: number, b:number) => a - b)
        console.log(sorted)
        return sorted
    }
}