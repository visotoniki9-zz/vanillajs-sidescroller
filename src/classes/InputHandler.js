export default class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if ((e.key === 'w'
      || e.key === 'a'
      || e.key === 's'
      || e.key === 'd'
      || e.key === ' ')
      && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
      console.log(this.keys);
    });
    window.addEventListener('keyup', (e) => {
      const index = this.keys.indexOf(e.key);
      if (index !== -1) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
      console.log(this.keys);
    });
  }
}
