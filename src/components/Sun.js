import { BLEND_MODES, Container, Sprite } from 'pixi.js';
import gsap from 'gsap';

export default class Sun extends Container {
  constructor() {
    super();

    this.name = 'sun';

    this._blast = new Sprite.from('sunBlast');

    this._glowTop = new Sprite.from('sunGlow');
    this._glowTop.blendMode = BLEND_MODES.SCREEN;

    this._glowBottom = new Sprite.from('sunGlow');
    this._glowBottom.blendMode = BLEND_MODES.SCREEN;

    this._createSun();
  }

  /**
   * @private
   */
  _createSun() {
    const sun = new Sprite.from('sun');

    this._glowTop.anchor.set(0.5);
    this._glowTop.x = 300;
    this._glowTop.y = 250;
    this._glowTop.scale.set(0.5);

    this._glowBottom.x = 300;
    this._glowBottom.y = 500;
    this._glowBottom.anchor.set(0.5);
    this._glowBottom.scale.set(0.5);

    const tl = new gsap.timeline();

    tl.to(this._glowTop.scale, {
      x: 1,
      y: 1,
      duration: 10,
      yoyo: true,
      repeat: -1,
    });

    this._blast.alpha = 0;

    this.addChild(sun);
    this.addChild(this._glowBottom);
    this.addChild(this._glowTop);
    this.addChild(this._blast);
  }
}
