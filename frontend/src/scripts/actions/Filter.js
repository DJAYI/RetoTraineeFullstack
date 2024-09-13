import { response, renderDataTable } from '../API.js'

const ModalFilter = document.getElementById('filter-dialog')
const btnFilter = document.getElementById('btnFilter')
const btnCloseFilterDialog = document.getElementById('btnCloseFilterDialog')

const filterElements = [
  { id: 'filter-item', key: 'ITEM' },
  { id: 'filter-cantidad', key: 'CANTIDAD' },
  { id: 'filter-concepto', key: 'CONCEPTO' },
  { id: 'filter-proveedor', key: 'PROVEEDOR' },
  { id: 'filter-categoria', key: 'CATEGORIA' },
  { id: 'filter-forma-contratar', key: 'FORMA DE CONTRATAR' },
  { id: 'filter-pagos-mensuales', key: 'PAGOS MENSUALES' },
  { id: 'filter-valor-unitario', key: 'VALOR UNITARIO' },
  { id: 'filter-valor-total', key: 'VALOR TOTAL(USD)' },
  { id: 'filter-valor-dolar', key: 'VALOR EN DOLAR' },
  { id: 'filter-valor-anual', key: 'VALOR ANUAL VIGENCIA 2024(COP)' }
]

const populateSelectOptions = () => {
  filterElements.forEach(({ id, key }) => {
    const selectElement = document.getElementById(id)
    const uniqueValues = [...new Set(response.map(item => item[key]))]
    uniqueValues.forEach(value => {
      selectElement.innerHTML += `<option value="${value}">${value}</option>`
    })
  })
}

const addFilterEventListeners = () => {
  filterElements.forEach(({ id, key }) => {
    const selectElement = document.getElementById(id)
    selectElement.addEventListener('change', () => {
      const value = selectElement.value
      filterData(response, key, value)
    })
  })
}

const filterData = (data, filter, value) => {
  if (filter === 'CANTIDAD' && value !== 'no-value') {
    value = parseInt(value)
  }
  const filteredData = value !== 'no-value'
    ? data.filter(item => item[filter] === value)
    : response

  renderDataTable(filteredData, 0)
}

btnFilter.addEventListener('click', () => {
  ModalFilter.showModal()
})

btnCloseFilterDialog.addEventListener('click', () => {
  ModalFilter.close()
})

populateSelectOptions()
addFilterEventListeners()
