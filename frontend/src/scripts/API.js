const tableContentBody = document.querySelector('#table-content-body')

const getDataFromAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/contrataciones/')
    if (!response.ok) {
      throw new Error('No se pudo obtener la información de la API')
    }
    return await response.json()
  } catch (error) {
    console.error('Ha ocurrido un error al obtener la información: ' + error)
    document.body.innerHTML += '<center><h2>No se pudo obtener la información</h2><center>'
    return [{ error: true }]
  }
}

export const response = await getDataFromAPI()
const PageSize = 10

export const renderDataTable = (data, PageIndex = 0) => {
  tableContentBody.innerHTML = ''
  const CurrentRecordsPerPage = PageIndex * PageSize
  data.map((data) => data).slice(CurrentRecordsPerPage, CurrentRecordsPerPage + PageSize).forEach((item) => {
    const row = `
      <tr>
        <td class="col-item">${item.ITEM}</td>
        <td class="col-cantidad">${item.CANTIDAD}</td>
        <td class="col-concepto">${item.CONCEPTO}</td>
        <td class="col-proveedor">${item.PROVEEDOR}</td>
        <td class="col-categoria">${item.CATEGORIA}</td>
        <td class="col-forma-contratar">${item['FORMA DE CONTRATAR']}</td>
        <td class="col-pagos-mensuales">${item['PAGOS MENSUALES']}</td>
        <td class="col-valor-unitario">${item['VALOR UNITARIO']}</td>
        <td class="col-valor-total">${item['VALOR TOTAL(USD)']}</td>
        <td class="col-valor-dolar">${item['VALOR EN DOLAR']}</td>
        <td class="col-valor-anual">${item['VALOR ANUAL VIGENCIA 2024(COP)']}</td>
      </tr>`
    tableContentBody.innerHTML += row
  })

  console.log('Tabla renderizada')
}
