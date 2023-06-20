import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class SandwichPromoComponent extends Component {
  @tracked _promo;
  @tracked isLoading;
  @tracked isError;

  get promo() {
    if (typeof this._promo == 'string') {
      return this._promo;
    }

    return this.args.value.promoCode;
  }

  set promo(value) {
    this._promo = value;
  }

  get isValid() {
    return this._promo && this._promo === this.args.value.promoCode;
  }

  @action
  async redeem() {
    this.isLoading = true;
    this.isError = false;

    try {
      const response = await fetch(`/promo/${this.promo}.json`);

      if (response.status == 200) {
        this.args.value.promoCode = this.promo;
      } else {
        this.args.value.promoCode = '';
        this.isError = true;
      }
    } catch(err) {
      this.args.value.promoCode = '';
      this.isError = true;
    }

    this.isLoading = false;
  }
}
