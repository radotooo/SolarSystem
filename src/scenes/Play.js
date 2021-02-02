import { Sprite, filters, Filter } from 'pixi.js';

import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Earth from '../components/Earth';
import Stars from '../components/Stars';
import Rocket from '../components/Rocket';
import Sun from '../components/Sun';

import { random } from '../core/utils';

export default class Play extends Scene {
  async onCreated() {
    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    // this.addChild(footer);

    const earth = new Earth();
    this.addChild(earth);

    const stars = new Stars();
    this.addChild(stars);

    const rocket = new Rocket();
    this.addChild(rocket);

    const sun = new Sun();
    sun.x = 400;
    sun.y = -500;

    this.addChild(sun);
    // const filter = new Filter(sun._blast);
    // this.filters = [new Filter.DisplacementFilter(sun._blast, 200)];
    // sun.mas;
    // this.parent.parent.filters = [new filters.NoiseFilter()];
    // console.log(this);

    // this.filters.push(filter);

    // viewpoer inside of the  scene must have a filter appkied whisch uses the _blast from the sun
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }

  _createStars(count) {
    for (let index = 0; index < count; index++) {
      const stars = new Stars();
      stars.y = random(-1000, 1000);
      stars.x = random(-1000, 1000);
      this.addChild(stars);
    }
  }
}
