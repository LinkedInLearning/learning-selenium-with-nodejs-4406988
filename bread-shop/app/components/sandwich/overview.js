import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

const breadPrices = {
  'white bread': 4,
  'brown bread': 4.5,
  'rye bread': 6,
  'focaccia bread': 7,
};

const fillingPrices = {
  halloumi: 3,
  tofu: 3,
  salmon: 5,
  turkey: 4,
};

export default class SandwichOverviewComponent extends Component {
  @tracked isWaiting;

  get breadPrice() {
    return breadPrices[this.args.value.breadType] ?? 0;
  }

  get fillingPrice() {
    return fillingPrices[this.args.value.mainFilling] ?? 0;
  }

  get extrasPrices() {
    const rawPrice = this.args.value.extras.length * 0.7;
    const price = Math.round(rawPrice * 10) / 10;
    return price;
  }

  get productPrice() {
    return this.breadPrice + this.fillingPrice + this.extrasPrices;
  }

  get extras() {
    return this.args.value.extras.join(', ');
  }

  get promoPrice() {
    if (!this.args.value?.promoCode) {
      return 0;
    }

    return this.productPrice * -0.1;
  }

  get total() {
    const rawPrice = this.productPrice + this.promoPrice;
    return Math.round(rawPrice * 10) / 10;
  }

  @action
  waitSomeTime() {
    this.isWaiting = true;

    later(() => {
      this.isWaiting = false;
    }, 200);
  }
}
