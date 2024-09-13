import { response, renderDataTable } from '../API.js'

const pagination = document.getElementById('pagination')

const TotalRecords = response.length
const PageSize = 10
const TotalPages = Math.ceil(TotalRecords / PageSize)

for (let i = 0; i < TotalPages; i++) {
  const page = document.createElement('button')
  page.innerHTML = i + 1
  page.classList.add('page')
  page.setAttribute('data-page', i)
  page.setAttribute('id', i)
  pagination.appendChild(page)
}

renderDataTable(response, 0) // render inital page

const btnPages = pagination.querySelectorAll('.page')
btnPages.forEach((btnPage) => {
  btnPage.addEventListener('click', (e) => {
    let pageIndex = e.target.getAttribute('data-page')
    pageIndex = parseInt(pageIndex)

    renderDataTable(response, pageIndex)

    btnPages.forEach((btnPage) => {
      btnPage.classList.remove('active')
      e.target.value >= 0 && e.target.classList.add('active')
    })
  })
})

const firstButton = pagination.querySelector('.page:first-child')
firstButton.classList.add('active')
