export default class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener('keydown', (e) => {
      if ((e.key === 'w'
      || e.key === 'a'
      || e.key === 's'
      || e.key === 'd')
      && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener('keyup', (e) => {
      const index = this.keys.indexOf(e.key);
      if (index !== -1) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
