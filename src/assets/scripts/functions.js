function plata() {
  const neto = parseFloat(document.getElementById('neto').value);
  const bruto = parseFloat((document.getElementById('bruto').value = neto * (137 / 100)));
}
const dodaj = document.getElementById('dodajID');
dodaj.addEventListener('click', dodajRed);

function dodajRed() {
  plata();

  const red = 1;
  const ime = document.getElementById('ime').value;
  const prezime = document.getElementById('prezime').value;
  const adresa = document.getElementById('adresa').value;
  const neto = document.getElementById('neto').value;
  const bruto = document.getElementById('bruto').value;
  const izmeni = document.getElementById('izmeni').value;
  const izbrisi = document.getElementById('izbrisi').value;

  const tabela = document.getElementById('tabela');

  const noviRed = tabela.insertRow(red);

  const kol_1 = noviRed.insertCell(0);
  const kol_2 = noviRed.insertCell(1);
  const kol_3 = noviRed.insertCell(2);
  const kol_4 = noviRed.insertCell(3);
  const kol_5 = noviRed.insertCell(4);
  const kol_6 = noviRed.insertCell(5);
  const kol_7 = noviRed.insertCell(6);

  kol_1.innerHTML = ime;
  kol_2.innerHTML = prezime;
  kol_3.innerHTML = adresa;
  kol_4.innerHTML = neto;
  kol_5.innerHTML = bruto;
  kol_6.innerHTML = izmeni;
  kol_7.innerHTML = izbrisi;
}

export { plata, dodajRed };
