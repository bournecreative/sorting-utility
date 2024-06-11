import { sorter } from './sorter'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  GO
  </div>
`
sorter([1,4,5])
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
