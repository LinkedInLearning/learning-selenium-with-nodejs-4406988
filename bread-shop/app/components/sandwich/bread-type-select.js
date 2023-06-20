import Component from '@glimmer/component';

export default class SandwichBreadTypeSelectComponent extends Component {
  get isWhite() {
    return this.args.value == 'white bread';
  }

  get isBrown() {
    return this.args.value == 'brown bread';
  }

  set isBrown(value) {
    if (value) {
      this.args.onChange('brown bread');
    }
  }

  get isRye() {
    return this.args.value == 'rye bread';
  }

  get isFocaccia() {
    return this.args.value == 'focaccia bread';
  }
}
