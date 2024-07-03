import { response } from "../API.js";
import renderDataTable from "../API.js";
import { initialPage } from "./Pagination.js";

const ModalFilter = document.getElementById("filter-dialog");
const btnFilter = document.getElementById("btnFilter");
const btnCloseFilterDialog = document.getElementById("btnCloseFilterDialog");

const SelectITEM = document.getElementById("filter-item");
const SelectCANTIDAD = document.getElementById("filter-cantidad");
const SelectCONCEPTO = document.getElementById("filter-concepto");
const SelectPROVEEDOR = document.getElementById("filter-proveedor");
const SelectCATEGORIA = document.getElementById("filter-categoria");
const SelectFORMA_CONTRATAR = document.getElementById("filter-forma-contratar");
const SelectPAGOS_MENSUALES = document.getElementById("filter-pagos-mensuales");
const SelectVALOR_UNITARIO = document.getElementById("filter-valor-unitario");
const SelectVALOR_TOTAL = document.getElementById("filter-valor-total");
const SelectVALOR_DOLAR = document.getElementById("filter-valor-dolar");
const SelectVALOR_ANUAL = document.getElementById("filter-valor-anual");

const SelectsElements = [
  SelectITEM,
  SelectCANTIDAD,
  SelectCONCEPTO,
  SelectPROVEEDOR,
  SelectCATEGORIA,
  SelectFORMA_CONTRATAR,
  SelectPAGOS_MENSUALES,
  SelectVALOR_UNITARIO,
  SelectVALOR_TOTAL,
  SelectVALOR_DOLAR,
  SelectVALOR_ANUAL,
];

response.forEach((item) => {
  SelectsElements[0].innerHTML += `<option value="${item.ITEM}">${item.ITEM}</option>`;
  SelectsElements[1].innerHTML += `<option value="${item.CANTIDAD}">${item.CANTIDAD}</option>`;
  SelectsElements[2].innerHTML += `<option value="${item.CONCEPTO}">${item.CONCEPTO}</option>`;
  SelectsElements[3].innerHTML += `<option value="${item.PROVEEDOR}">${item.PROVEEDOR}</option>`;
  SelectsElements[4].innerHTML += `<option value="${item.CATEGORIA}">${item.CATEGORIA}</option>`;
  SelectsElements[5].innerHTML += `<option value="${item["FORMA DE CONTRATAR"]}">${item["FORMA DE CONTRATAR"]}</option>`;
  SelectsElements[6].innerHTML += `<option value="${item["PAGOS MENSUALES"]}">${item["PAGOS MENSUALES"]}</option>`;
  SelectsElements[7].innerHTML += `<option value="${item["VALOR UNITARIO"]}">${item["VALOR UNITARIO"]}</option>`;
  SelectsElements[8].innerHTML += `<option value="${item["VALOR TOTAL(USD)"]}">${item["VALOR TOTAL(USD)"]}</option>`;
  SelectsElements[9].innerHTML += `<option value="${item["VALOR EN DOLAR"]}">${item["VALOR EN DOLAR"]}</option>`;
  SelectsElements[10].innerHTML += `<option value="${item["VALOR ANUAL VIGENCIA 2024(COP)"]}">${item["VALOR ANUAL VIGENCIA 2024(COP)"]}</option>`;
});

SelectsElements.forEach((select) => {
  SelectsElements.forEach((select) => {
    select.addEventListener("change", () => {
      const filter = select.name.toString();
      const value = select.value;
      filterData(response, filter, value);
    });
  });
});

const filterData = (data, filter, value) => {
  let filteredData;
  //Comprobar si el filtro es del tipo "Cantidad" y si es asi se convierte el valor a un numero
  if (filter === "CANTIDAD") {
    value !== "no-value"
      ? (value = parseInt(value))
      : renderDataTable(response);
  }
  value !== "no-value"
    ? (filteredData = data.filter((item) => {
        return item[filter] === value;
      }))
    : (filteredData = initialPage);

  renderDataTable(filteredData);
};

btnFilter.addEventListener("click", () => {
  ModalFilter.showModal();
});

btnCloseFilterDialog.addEventListener("click", () => {
  ModalFilter.close();
});
