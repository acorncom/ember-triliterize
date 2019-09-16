import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { setCORS } from "google-translate-api-browser";
// setting up cors-anywhere server address
const translate = setCORS("https://cors-anywhere.herokuapp.com/");

export default class TranslatorGoogle extends Component {

  @tracked translated = '';

  @action
  translateMe() {
    translate(this.args.text, { from: 'ar', to: 'en' }).then(res => {
      this.translated = res.text;
    });
  }
}
