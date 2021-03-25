import { Container, Sprite } from 'pixi.js';
import { random } from '../core/utils';
import gsap from 'gsap';

/**
 * Initializes a new instance of Stars
 * @class
 * @extends {PIXI.Container}
 */
export default class Stars extends Container {
  constructor() {
    super();
    this.name = 'stars';
    this._createStars(50);
  }

  /**
   * @private
   */
  _createStars(count) {
    for (let index = 0; index < count; index++) {
      const star = new Sprite.from('star');

      star.anchor.set(0.5);
      star.x = random(-1200, 1200);
      star.y = random(-1200, 1200);

      gsap.to(star, {
        x: random(star.x, star.x + 50),
        y: random(star.y, star.y + 50),
        duration: 10,
        yoyo: true,
        repeat: -1,
        ease: 'linear',
      });

      this.addChild(star);
    }
  }
}
