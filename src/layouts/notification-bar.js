import { html, css, LitElement } from 'lit';
import { SharedStyles } from "../../styles/shared-styles.js";

export class NotificationBar extends LitElement {
   
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

customElements.define('notification-bar', NotificationBar);