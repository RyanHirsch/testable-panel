import { Component, h } from "panel";

customElements.define(
  "example-app",
  class extends Component {
    get config() {

      return {
        defaultState: {
          working: true
        },
        template: () =>
          h("div.app", [h("div.about", "This is a beep app.")])
      };
    }
  }
);
