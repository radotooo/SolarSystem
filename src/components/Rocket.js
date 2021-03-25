import { Container, Sprite } from 'pixi.js';
import Fire from './Fire';
import gsap from 'gsap';

/**
 * Initializes a new instance of Rocket
 * @class
 * @extends {PIXI.Container}
 */
export default class Rocket extends Container {
  constructor() {
    super();

    this.name = 'rocket';
    this.x = -550;
    this.y = 100;
    this.pivot.set(-350, 0);

    this._body = new Sprite.from('rocket');
    this._fire = new Container();

    this._addFire();
    this.addChild(this._body, this._fire);
    this._rotate();
  }

  /**
   * @private
   */
  _addFire() {
    const fire = new Fire();

    fire.pivot.set(-350, 0);
    fire.x = 40;
    fire.y = 365;
    fire.scale.x = 0.4;
    fire.scale.y = 0.2;
    fire.angle = 270;

    this._fire.addChild(fire);
  }

  /**
   * @private
   */
  _rotate() {
    gsap.to(this, {
      rotation: -6.3,
      ease: 'linear',
      duration: 5,
      repeat: -1,
    });
  }
}
