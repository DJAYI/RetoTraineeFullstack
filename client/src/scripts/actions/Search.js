import { response } from "../API.js";
import renderDataTable from "../API.js";
import { initialPage } from "./Pagination.js";

const search = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");
const toggleSearch = document.querySelectorAll(".toggle-search");

const Search = (data, searchValue) => {
  return data.filter((item) => {
    const lowerSearchValue = searchValue.toLowerCase();
    return (
      item.ITEM.toLowerCase().includes(lowerSearchValue) ||
      item.CANTIDAD.toString().toLowerCase().includes(lowerSearchValue) ||
      item.CONCEPTO.toLowerCase().includes(lowerSearchValue) ||
      item.PROVEEDOR.toLowerCase().includes(lowerSearchValue) ||
      item.CATEGORIA.toLowerCase().includes(lowerSearchValue) ||
      item["FORMA DE CONTRATAR"].toLowerCase().includes(lowerSearchValue) ||
      item["PAGOS MENSUALES"].toLowerCase().includes(lowerSearchValue) ||
      item["VALOR UNITARIO"].toLowerCase().includes(lowerSearchValue) ||
      item["VALOR TOTAL(USD)"].toLowerCase().includes(lowerSearchValue) ||
      item["VALOR EN DOLAR"].toLowerCase().includes(lowerSearchValue) ||
      item["VALOR ANUAL VIGENCIA 2024(COP)"]
        .toLowerCase()
        .includes(lowerSearchValue)
    );
  });
};

search.addEventListener("keyup", async (e) => {
  const searchValue = e.target.value;
  const filteredData = Search(response, searchValue);
  searchValue.length > 0
    ? renderDataTable(filteredData)
    : renderDataTable(initialPage);
});

btnSearch.addEventListener("click", (e) => {
  toggleSearch.forEach((toggle) => {
    toggle.classList.toggle("hidden");
  });
});
