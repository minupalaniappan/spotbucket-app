const getSelection = (handler) => {
  let selection = ''

  window.addEventListener('mouseup', async () => {
    if (window.getSelection) {
      selection = window.getSelection()
    } else if (document.selection) {
      selection = document.selection.createRange()
    }

    await handler(selection)
  })
}

export default getSelection
