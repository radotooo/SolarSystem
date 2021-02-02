import Assets from '../core/AssetManager';
import Scene from './Scene';
import { Text } from 'pixi.js';
import config from '../config';

export default class Splash extends Scene {
  constructor() {
    super();

    this.loadingText = new Text('0%', {
      fontSize: 75,
      fill: 0xffc900,
    });

    this.config = config.scenes.Splash;

    this.loadingText.anchor.set(0.5);
    this.loadingText.x = this.width / 2;
    this.loadingText.y = this.height / 2;
    this.addChild(this.loadingText);
  }

  get finish() {
    return new Promise((res) => setTimeout(res, this.config.hideDelay));
  }

  preload() {
    const images = {
      logo: Assets.images.logo,
      rocket: Assets.images.rocket,
      star: Assets.images.star,
      sunBlast: Assets.images['sun-blast'],
      sunGlow: Assets.images['sun-glow'],
      sun: Assets.images.sun,
      earth: Assets.images.earth,
      fire: Assets.images.fire,
    };
    const sounds = {};

    return super.preload({ images, sounds });
  }

  onResize(width, height) {
    // eslint-disable-line no-unused-vars
    this.loadingText.x = width / 2;
    this.loadingText.y = height / 2 + 500;
  }

  onLoadProgress(val) {
    this.loadingText.text = `${val}%`;
  }
}
