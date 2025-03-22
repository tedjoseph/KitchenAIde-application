import { html, css, LitElement } from "lit";
import { SharedStyles } from "../../styles/shared-styles.js";

export class SiteFooter extends LitElement {
   
   static styles = [
      SharedStyles.styles,
      css`
         :host {
            align-items: center;
            display: flex;
            justify-content: center;
         }

         footer {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
         }

      `,
   ];

   constructor() {
      super();
      this.startYear = "<Company Start Year>";
      this.presentYear = new Date().getFullYear();
      this.company = "<Company Name>";
   }

   render() {
      return html`
         <footer>
            <p>© ${this.startYear}-${this.presentYear} ${this.company}</p>
         </footer>
      `;
   }
}

customElements.define("site-footer", SiteFooter);