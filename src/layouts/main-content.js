import { html, css, LitElement } from "lit";
import { SharedStyles } from "../../styles/shared-styles.js";

export class MainContent extends LitElement {

   static properties = {
      selectedLink: { type: String },
   };

   static styles = [SharedStyles.styles,
      css`
         :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;
            overflow: hidden;
         }
         main {
            text-align: center;
         }
      `,
   ];

   constructor() {
      super();
      this.selectedLink = "";
   }

   render() {
      return html`
         <main>
            <p style="font-size: 1.25rem;">
               << <span style="font-weight: bold;">MAIN-CONTENT</span>: Actionable area for users. >>
            </p>
            ${this.selectedLink
               ? html` <p>You selected ${this.selectedLink}</p>`
               : html` <p>Please select an option from the navigation menu.</p>`
            }
         </main>
      `;
   }

}

customElements.define("main-content", MainContent);
