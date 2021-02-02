import { Container, Sprite } from 'pixi.js';

export default class Earth extends Container {
  constructor() {
    super();
    this.name = 'earth';

    this._createEarth();
  }

  /**
   * @private
   */
  _createEarth() {
    this._body = new Sprite.from('earth');
    this._body.anchor.set(0.5);
    this._body.x = -550;
    this._body.y = 100;

    this.addChild(this._body);
  }
}
