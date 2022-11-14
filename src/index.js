// eslint-disable-next-line no-unused-vars
import style from './style.css';
import { gameLoop } from './gameLoop';
import img from './assets/battleships_colour.svg';
import img2 from './assets/jasper_colour.svg';

const logo = document.getElementById('logo-battleships');
logo.src = img;

const logo2 = document.getElementById('logo-jasper');
logo2.src = img2;


let game = new gameLoop();
game.init();