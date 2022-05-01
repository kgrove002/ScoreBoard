'use strict';

let win = 0;
let lost = 0;
let total = 0;
let percent = 0;

document.querySelector('.btn-win').addEventListener('click', function () {
  win++;
  document.querySelector('.win-numb').textContent = win;
  calcTotal();
  calcPercent();
});

document.querySelector('.btn-lost').addEventListener('click', function () {
  lost++;
  document.querySelector('.lost-numb').textContent = lost;
  calcTotal();
  calcPercent();
});

function calcTotal() {
  total = win + lost;
  document.querySelector('.total-numb').textContent = total;
}

function calcPercent() {
  percent = Math.trunc((win * 100) / total);
  document.querySelector('.per-numb').textContent = percent + '%';
}
