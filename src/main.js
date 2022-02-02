/* eslint-disable max-classes-per-file */
import './style.css';
import playerImg from './assets/player.webp';
import enemy1Img from './assets/enemy_1.webp';
import background1Img from './assets/background_single.webp';

import InputHandler from './classes/InputHandler';
import Player from './classes/Player';

window.addEventListener('load', () => {
  // Canvas setup
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = canvas.width * 9 / 16;
  // Canvas auto resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = canvas.width * 9 / 16;
  });

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height, playerImg);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    player.update(input);
    requestAnimationFrame(animate);
  }
  animate();
});
