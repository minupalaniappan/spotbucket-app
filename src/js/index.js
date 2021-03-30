import getSelection from './listener'
import { execute } from './execute'

const app = () => {
  getSelection((e) => execute(e.toString().trim()))
}

window.addEventListener('load', () => {
  app()
  execute('Bradley Beal')
})
