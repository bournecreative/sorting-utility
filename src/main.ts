import { Sorter } from './sorter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  GO
  </div>
`

const numberSorted = new Sorter([100,34,5,59,4,23]);
numberSorted.sortCollection()

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
