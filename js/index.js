const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    umur: document.getElementById("umur").value,
    jenisKelamin: document.querySelector('input[name="jenis-kelamin"]:checked')
      ?.value,
    perokok: document.querySelector('input[name="anda-perokok"]:checked')
      ?.value,
    gudangGaram: document.getElementById("gudang-garam").checked,
    luckyStrike: document.getElementById("lucky-strike").checked,
    marlboro: document.getElementById("marlboro").checked,
    esse: document.getElementById("esse").checked,
  };

  let histories = JSON.parse(localStorage.getItem("history")) || [];
  histories.push(data);

  window.localStorage.setItem("history", JSON.stringify(histories));

  window.location.href = "./submission.html";
});
