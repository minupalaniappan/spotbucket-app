import getSelection from './listener'
import { execute, install } from './execute'

const app = async () => {
  install()
  getSelection((e) => execute(e.toString().trim()))
}

window.addEventListener('load', async () => {
  await app()
})
