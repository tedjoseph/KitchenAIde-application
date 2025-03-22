import { html, css, LitElement } from "lit";

export class DateTime extends LitElement {

   static properties = {
      dateText: { type: String }
   };

   static styles = [
      css`

      `,
   ];

   constructor() {
      super();
      this.dateText = this.getCurrentTime();
   }

   connectedCallback() {
      super.connectedCallback();
      this.timer = setInterval(() => {
      this.dateText = this.getCurrentTime();
      }, 1000);
   }

   disconnectedCallback() {
      super.disconnectedCallback();
      clearInterval(this.timer);
   }

   getCurrentTime() {
      const now = new Date();
      return `${now.toLocaleDateString()}, ${now.toLocaleTimeString()}`;
   }

   render() {
      return html` 
         <time>${this.dateText}</time> 
      `;
   }
   
}

customElements.define("date-time", DateTime);