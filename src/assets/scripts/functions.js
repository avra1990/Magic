export default function plata() {
  const neto = parseFloat(document.getElementById('neto').value);
  const bruto = parseFloat((document.getElementById('bruto').value = neto * (137 / 100)));
}
/*
export default function dodajRed() {
  let ime     = document.getElementById('ime').value;
  let prezime = document.getElementById('prezime').value;
  let adresa  = document.getElementById('adresa').value;
  let neto    = document.getElementById('neto').value;
  let bruto   = document.getElementById('bruto').value;

  let tabela  = document.getElementById('table')(0);
  let noviRed = tabela.insertRow(table.rows.length);

  let kolona_1 = noviRed.insertCell(0);
  let kolona_2 = noviRed.insertCell(1);
  let kolona_3 = noviRed.insertCell(2);
  let kolona_4 = noviRed.insertCell(3);
  let kolona_5 = noviRed.insertCell(4);

  kolona_1.innerHTML = ime;
  kolona_2.innerHTML = prezime;
  kolona_3.innerHTML = adresa;
  kolona_4.innerHTML = neto;
  kolona_5.innerHTML = bruto;
};
*/
/*
function dodajRed() {
  const tabela = document.getElementById('tabela');
  let podatak;
  let mojInput;
  const red = document.createElement('tr');
  red.setAttribute('class', 'unit-table');

  for (let i = 0; i < 5; i++) {
    podatak = document.createElement('td');
    mojInput = document.createElement('input');
    mojInput.setAttribute('type', 'text');
    podatak.appendChild(mojInput);
    red.appendChild(podatak);
  }

  tabela.appendChild(red);
}
*/

/*
function dodajRed() {
  let tabela = document.getElementById('tabela');
  tabela.appendChild(red);
  let ime = document.getElementById('ime');
  ime = document.createElement('td');
  let prezime = document.getElementById('prezime');
  prezime = document.createElement('td');
  let adresa = document.getElementById('adresa');
  adresa = document.createElement('td');
  let neto = document.getElementById('neto');
  neto = document.createElement('td');
  let bruto = document.getElementById('bruto');
  bruto = document.createElement('td');
  let podatak = document.createElement(td);
  red.appendChild(podatak);

  if (ime != '') {
    var ime = input('Ime: ');
    var prezime = input('Prezime: ');
    var adresa = input('Adresa: ');
    var neto = input('Neto: ');
  }

  this.tabela.push(
    { ime: ime },
    { prezime: prezime },
    { adresa: adresa },
    { neto: neto },
    { bruto: bruto }
  );

  document.getElementById('dodajID').onclick = dodajRed;
}
*/

export { plata };
