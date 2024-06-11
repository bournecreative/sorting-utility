import { Sorter } from './sorter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  GO
  </div>
`
const numberSorted = new Sorter([100,34,5,59,4,23]);
const stringSorted = new Sorter('LukeIAmYourFather');
const nums = numberSorted.sortCollection()
const sortStrs = stringSorted.sortCollection()
console.log(numberSorted.collection)
console.log(stringSorted.collection)

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
