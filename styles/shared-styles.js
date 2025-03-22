import { html, css, LitElement } from 'lit'

export class SharedStyles extends LitElement {
   
   static styles = [
      css`
         * {
            font-family: 'Open Sans', sans-serif;
         }
      `,
   ]

   constructor() {
      super();
   }

}

customElements.define('shared-styles', SharedStyles);