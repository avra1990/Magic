export default function plata() {
  const neto = parseFloat(document.getElementById('neto').value);
  const bruto = parseFloat((document.getElementById('bruto').value = neto * (137 / 100)));
}

export default function dodajRed() {
  const ime = document.getElementById('ime');
  const prezime = document.getElementById('prezime');
  const adresa = document.getElementById('adresa');
  const neto = document.getElementById('neto').value;
  const bruto = document.getElementById('bruto').value = neto * (137 / 100);

  const table = document.getElementsByTagName('table')(0);
  const newRow = table.insertRow(table.rows.length);

  const cell_1 = newRow.insertCell(0);
  const cell_2 = newRow.insertCell(1);
  const cell_3 = newRow.insertCell(2);
  const cell_4 = newRow.insertCell(3);
  const cell_5 = newRow.insertCell(4);

  cell_1.innerHTML = ime;
  cell_2.innerHTML = prezime;
  cell_3.innerHTML = adresa;
  cell_4.innerHTML = neto;
  cell_5.innerHTML = bruto;
};


