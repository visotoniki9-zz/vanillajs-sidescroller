/* eslint-disable max-classes-per-file */
import './style.css';
import './assets/player.webp';
import './assets/enemy_1.webp';
import './assets/background_single.webp';

import InputHandler from './classes/InputHandler';

window.addEventListener('load', () => {
  // Canvas setup
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = canvas.width * 9 / 16;
  // Canvas auto resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = canvas.width * 9 / 16;
  });

  const input = new InputHandler();

  class Player {}
  class Background {}
  class Enemy {}

  function handleEnemies() {}
  function displayStatusText() {}
  function animate() {}
});
