import { response } from "../API.js";

const btnExport = document.getElementById("btnExport");
const data = JSON.stringify(response);

const blob = new Blob([data], { type: "application/json" });

const url = window.URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "contrataciones.json";

btnExport.addEventListener("click", () => {
  a.click();
  window.URL.revokeObjectURL(url);
});
