import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SandwichFillingSelectComponent extends Component {
  extras = ['salad', 'tomatoes', 'avocado', 'ketchup', 'mustard'];

  get availableExtras() {
    return this.extras.map((name) => ({ name, checked: false }));
  }

  @action
  changeMainFilling(event) {
    this.args.onChangeMainFilling(event.target.value);
  }

  @action
  changeExtra(value, event) {
    const inputs = [
      ...event.target.parentNode.parentNode.querySelectorAll('input:checked'),
    ];

    const values = inputs.map((a) => a.getAttribute('value'));

    this.args.onChangeExtras(values);
  }
}
