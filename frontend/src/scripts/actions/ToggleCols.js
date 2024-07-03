document.addEventListener("DOMContentLoaded", () => {
  const ModalToggleCols = document.getElementById("toggle-cols-dialog");
  const btnToggleCols = document.getElementById("btnToggleColumns");
  const btnCloseDialog = document.getElementById("btnCloseDialog");

  const updateColumns = () => {
    const colsItems = document.querySelectorAll(".col-item");
    const colsCantidad = document.querySelectorAll(".col-cantidad");
    const colsConcepto = document.querySelectorAll(".col-concepto");
    const colsProveedor = document.querySelectorAll(".col-proveedor");
    const colsCategoria = document.querySelectorAll(".col-categoria");
    const colsFormaContratar = document.querySelectorAll(
      ".col-forma-contratar"
    );
    const colsPagosMensuales = document.querySelectorAll(
      ".col-pagos-mensuales"
    );
    const colsValorUnitario = document.querySelectorAll(".col-valor-unitario");
    const colsValorTotal = document.querySelectorAll(".col-valor-total");
    const colsValorDolar = document.querySelectorAll(".col-valor-dolar");
    const colsValorAnual = document.querySelectorAll(".col-valor-anual");

    const AllCols = [
      ...colsItems,
      ...colsCantidad,
      ...colsConcepto,
      ...colsProveedor,
      ...colsCategoria,
      ...colsFormaContratar,
      ...colsPagosMensuales,
      ...colsValorUnitario,
      ...colsValorTotal,
      ...colsValorDolar,
      ...colsValorAnual,
    ];

    //Checkboxes
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const target = e.target;
        const value = target.value.toString().trim();
        const checked = target.checked;
        console.log(value, checked);
        if (checked) {
          AllCols.forEach((col) => {
            if (col.classList.contains(value)) {
              col.classList.add("hidden");
            }
          });
        } else {
          AllCols.forEach((col) => {
            if (col.classList.contains(value)) {
              col.classList.remove("hidden");
            }
          });
        }
      });
    });
  };

  const observer = new MutationObserver((mutations) => {
    updateColumns();
  });

  // Configurar el observador
  const config = { childList: true, subtree: true };

  // Comenzar a observar el cuerpo del documento
  observer.observe(document.body, config);

  btnToggleCols.addEventListener("click", () => {
    ModalToggleCols.showModal();
  });

  btnCloseDialog.addEventListener("click", () => {
    ModalToggleCols.close();
  });

  // Inicializar las columnas
  updateColumns();
});
