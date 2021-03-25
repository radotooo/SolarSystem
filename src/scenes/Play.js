import { filters } from 'pixi.js';

import Scene from './Scene';
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

    const rocket = new Rocket();
    const earth = new Earth();
    const stars = new Stars();

    const sun = new Sun();
    sun.x = 400;
    sun.y = -500;

    earth.addChild(rocket);
    this.addChild(stars, earth, sun);

    this.parent.parent.filters = [new filters.DisplacementFilter(sun._blast)];

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
