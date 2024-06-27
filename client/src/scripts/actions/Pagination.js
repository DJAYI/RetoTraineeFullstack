import { response } from "../API.js";
import renderDataTable from "../API.js";

const pagination = document.getElementById("pagination");

const TotalRecords = response.length;
const PageSize = 10;
const TotalPages = Math.ceil(TotalRecords / PageSize);

for (let i = 0; i < TotalPages; i++) {
  const page = document.createElement("button");
  page.innerHTML = i + 1;
  page.classList.add("page");
  page.setAttribute("data-page", i);
  page.setAttribute("id", i);
  pagination.appendChild(page);
}

const renderPagination = (data, PageIndex = 0) => {
  const CurrentRecordsPerPage = PageIndex * PageSize;

  const FromToRecords = data
    .map((data) => data)
    .slice(CurrentRecordsPerPage, CurrentRecordsPerPage + PageSize);

  return FromToRecords;
};
export const initialPage = renderPagination(response, 0);
renderDataTable(initialPage);

const btnPages = pagination.querySelectorAll(".page");
btnPages.forEach((btnPage) => {
  btnPage.addEventListener("click", (e) => {
    let pageIndex = e.target.getAttribute("data-page");
    pageIndex = parseInt(pageIndex);

    let setPage = renderPagination(response, pageIndex); // return array
    renderDataTable(setPage);

    btnPages.forEach((btnPage) => {
      btnPage.classList.remove("active");
      e.target.value >= 0 ? e.target.classList.add("active") : null;
    });
  });
});

const firstButton = pagination.querySelector(".page:first-child");
firstButton.classList.add("active");
