import getSelection from './listener'
import { execute, install } from './execute'

const app = () => {
  getSelection((e) => execute(e.toString().trim()))
}

window.addEventListener('load', () => {
  app()
  execute()
})
