// console.log("fala mundo!");
import { nanoid } from 'nanoid';
import './style.css';

const generateButton = document.querySelector('button');
const password = document.querySelector('h2');

generateButton.addEventListener('click', () => {
  const randomPassword = nanoid();
  password.innerHTML = randomPassword;
});
