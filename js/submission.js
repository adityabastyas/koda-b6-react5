let histories = JSON.parse(localStorage.getItem("history")) || [];

const tbody = document.querySelector("tbody");

histories.forEach((item) => {
  const tr = document.createElement("tr");

  const tdNama = document.createElement("td");
  tdNama.textContent = item.nama;
  tr.appendChild(tdNama);

  const tdUmur = document.createElement("td");
  tdUmur.textContent = item.umur;
  tr.appendChild(tdUmur);

  const tdJenis = document.createElement("td");
  tdJenis.textContent = item.jenisKelamin;
  tr.appendChild(tdJenis);

  const tdPerokok = document.createElement("td");
  tdPerokok.textContent = item.perokok;
  tr.appendChild(tdPerokok);

  const tdGudangg = document.createElement("td");
  tdGudangg.textContent = item.gudangGaram ? "✔" : "-";
  tr.appendChild(tdGudangg);

  const tdLucky = document.createElement("td");
  tdLucky.textContent = item.luckyStrike ? "✔" : "-";
  tr.appendChild(tdLucky);

  const tdMarlboro = document.createElement("td");
  tdMarlboro.textContent = item.marlboro ? "✔" : "-";
  tr.appendChild(tdMarlboro);

  const tdEsse = document.createElement("td");
  tdEsse.textContent = item.esse ? "✔" : "-";
  tr.appendChild(tdEsse);

  tbody.appendChild(tr);
});
