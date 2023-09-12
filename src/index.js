// console.log("fala mundo!");
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

import './style.css';

const generateButton = document.querySelector('button');
const password = document.querySelector('h2');
const copyButton = document.getElementById('copy');

generateButton.addEventListener('click', () => {
  const randomPassword = nanoid();
  password.innerHTML = randomPassword;
});

copyButton.addEventListener('click', () => {
  copy(password.innerHTML);
  // eslint-disable-next-line no-alert
  alert('Copiado Para Área de Transferência!');
});
