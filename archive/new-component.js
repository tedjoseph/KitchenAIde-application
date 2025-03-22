import { html, css, LitElement } from 'lit';

export class NewComponent extends LitElement {
   
   static properties = {
      "" : {}
   }
   
   static styles = [
      css`
         
      `,
   ]

   constructor() {
      super();
   }

   render() {
   
      return html`

      `;
   }

}

customElements.define('new-component', NewComponent);