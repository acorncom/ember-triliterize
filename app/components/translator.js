import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Translator extends Component {
  @tracked ltr1 = '';
  @tracked ltr2 = '';
  @tracked ltr3 = '';

  @action
  reset() {
    this.set('ltr1', '');
    this.set('ltr2', '');
    this.set('ltr3', '');
  }

  @action
  setLetter(letter, event) {
    this[letter] = event.target.value;
  }

  get valid() {
    return this.ltr1 && this.ltr2 && this.ltr3;
  }

  get verbForm1() {
    return this.ltr1 + '\u064E' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }
  get verbForm2() {
    return this.ltr1 + '\u064E' + this.ltr2 + '\u064E' + '\u0651' + this.ltr3 + '\u064E';
  }

  get verbForm3() {
    return this.ltr1 + '\u0627' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }

  get verbForm4() {
    return '\u0623' + this.ltr1 + '\u0652' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }

  get verbForm5() {
    return '\u062A'+ '\u064E' + this.ltr1 + '\u064E' + this.ltr2 + '\u064E' + '\u0651' + this.ltr3 + '\u064E';
  }

  get verbForm6() {
    return '\u062A' + '\u064E' + this.ltr1 + '\u0627' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }

  get verbForm7() {
    return '\u0627' + '\u0650' + '\u0646' + '\u0652' + this.ltr1 + '\u064E' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }

  get verbForm8() {
    return '\u0627' + '\u0650' + this.ltr1 + '\u0652' + '\u062A' + '\u064E' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }

  get verbForm9() {
    return '\u0627' + '\u0650' + this.ltr1 + '\u0652' + this.ltr2 + '\u064E' + this.ltr3 +  '\u064E' + '\u0651';
  }

  get verbForm10() {
    return '\u0627' + '\u0650' + '\u0633' + '\u0652' + '\u062A' + '\u064E' + this.ltr1 + '\u0652' + this.ltr2 + '\u064E' + this.ltr3 + '\u064E';
  }
}
