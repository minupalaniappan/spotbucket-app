import getSelection from './listener'
import execute from './execute'

const app = async () => {
  getSelection((e) => execute(e.toString().trim()))
}

window.addEventListener('load', async () => {
  await app()
})
