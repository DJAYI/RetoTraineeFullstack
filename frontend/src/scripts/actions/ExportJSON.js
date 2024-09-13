import { response } from '../API.js'

document.getElementById('btnExport').addEventListener('click', () => {
  const data = JSON.stringify(response)
  const blob = new Blob([data], { type: 'application/json' })
  const url = window.URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'contrataciones.json'
  a.click()

  window.URL.revokeObjectURL(url)
})
