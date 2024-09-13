/* eslint-disable no-undef */

window.addEventListener('load', () => {
  const $ = (selector) => document.querySelector(selector)
  const $$ = (selector) => document.querySelectorAll(selector)

  const elements = {
    modalToggleCols: $('#toggle-cols-dialog'),
    btnToggleCols: $('#btnToggleColumns'),
    btnCloseDialog: $('#btnCloseDialog'),
    cols: {
      items: $$('.col-item'),
      cantidad: $$('.col-cantidad'),
      concepto: $$('.col-concepto'),
      proveedor: $$('.col-proveedor'),
      categoria: $$('.col-categoria'),
      formaContratar: $$('.col-forma-contratar'),
      pagosMensuales: $$('.col-pagos-mensuales'),
      valorUnitario: $$('.col-valor-unitario'),
      valorTotal: $$('.col-valor-total'),
      valorDolar: $$('.col-valor-dolar'),
      valorAnual: $$('.col-valor-anual')
    }
  }

  const observerElements = new MutationObserver(() => {
    elements.cols = {
      items: $$('.col-item'),
      cantidad: $$('.col-cantidad'),
      concepto: $$('.col-concepto'),
      proveedor: $$('.col-proveedor'),
      categoria: $$('.col-categoria'),
      formaContratar: $$('.col-forma-contratar'),
      pagosMensuales: $$('.col-pagos-mensuales'),
      valorUnitario: $$('.col-valor-unitario'),
      valorTotal: $$('.col-valor-total'),
      valorDolar: $$('.col-valor-dolar'),
      valorAnual: $$('.col-valor-anual')
    }
  })

  observerElements.observe(document.body, { childList: true, subtree: true, attributes: true })

  const getCols = () => Object.values(elements.cols).flat()

  const toggleColumnVisibility = (value, checked) => {
    getCols().forEach((col) => {
      col.forEach((td) => {
        if (td.classList.contains(value)) {
          td.style.display = checked ? 'none' : 'table-cell'
        }
      })
    })
  }

  const updateColumns = () => {
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const { value, checked } = e.target
        toggleColumnVisibility(value.trim(), checked)
      })
    })
  }

  const observer = new MutationObserver(updateColumns)
  observer.observe(document.body, { childList: true, subtree: true, attributes: true })

  elements.btnToggleCols.addEventListener('click', () => {
    elements.modalToggleCols.showModal()
  })

  elements.btnCloseDialog.addEventListener('click', () => {
    elements.modalToggleCols.close()
  })

  updateColumns()
})
