import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class OrderSandwichController extends Controller {
  @action
  changeBreadType(value) {
    this.model.sandwich.breadType = value;
  }

  @action
  changeMainFilling(value) {
    this.model.sandwich.mainFilling = value;
  }

  @action
  changeExtras(value) {
    this.model.sandwich.extras = value;
  }
}
