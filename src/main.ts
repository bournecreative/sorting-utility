import { NumberCollection } from './NumberCollection';
import { Sorter } from './sorter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  GO
  </div>
`
const numData = new NumberCollection([100,34,5,59,4,23])
const numberSorted = new Sorter(numData)
const nums = numberSorted.sortCollection()
console.log(numberSorted.collection)

// const stringSorted = new Sorter('LukeIAmYourFather');
// console.log(stringSorted.collection)
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
