import { response, renderDataTable } from '../API.js'

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

const search = $('#search')
const btnSearch = $('#btnSearch')
const toggleSearch = $$('.toggle-search')

const Search = (data, searchValue) => {
  const lowerSearchValue = searchValue.toLowerCase()
  return data.filter((item) => {
    return Object.values(item).some(value =>
      value.toString().toLowerCase().includes(lowerSearchValue)
    )
  })
}

const handleSearch = async (e) => {
  const searchValue = e.target.value
  const filteredData = Search(response, searchValue)
  if (searchValue.length > 0) {
    renderDataTable(filteredData, 0)
  } else {
    renderDataTable(response, 0)
  }
}

const toggleSearchVisibility = () => {
  toggleSearch.forEach((toggle) => {
    toggle.classList.toggle('hidden')
  })
}

search.addEventListener('keyup', handleSearch)
btnSearch.addEventListener('click', toggleSearchVisibility)
