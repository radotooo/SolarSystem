import { Container, Sprite } from 'pixi.js';
import Fire from './Fire';
import gsap from 'gsap';

export default class Rocket extends Container {
  constructor() {
    super();

    this.x = -550;
    this.y = 100;
    this.pivot.set(-350, 0);

    this._body = new Sprite.from('rocket');
    this._body.name = 'rocket';

    this._fire = new Container();
    // this._addFire();

    this.addChild(this._body);
    this.addChild(this._fire);

    this._rotate();
  }

  /**
   * @private
   */
  _createRocket() {
    this._body.name = 'rocket';
    this.x = -550;
    this.y = 100;
  }

  /**
   * @private
   */
  _addFire() {
    const fire = new Fire();
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
