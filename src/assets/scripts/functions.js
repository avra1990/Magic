function plata() {
 //let ime = document.getElementById('p1ID').textContent;
 //let prezime =document.getElementById('p2ID').textContent;
 // let adresa = document.getElementById('p3ID').textContent;
  let neto = parseFloat(document.getElementById('p4ID').value);
  let bruto = parseFloat(document.getElementById('p5ID').value = neto * 1, 37);
  document.getElementById('obracunID').innerHTML = `Bruto zarada je:' + ${racun};
};

export {plata};
