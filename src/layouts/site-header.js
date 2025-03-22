import { html, css, LitElement } from "lit";
import { NavigationBar } from "./navigation-bar.js";
import { SharedStyles } from "../../styles/shared-styles.js";

export class SiteHeader extends LitElement {

   static styles = [SharedStyles.styles,
      css`
         :host {
            align-items: center;
            background-color: var(--main-color);
            display: flex;
            justify-content: center;
            padding: 10px;
         }
         header {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
         }
         #header-metadata {
            display: flex;
            flex-direction: column;
            justify-content: center;
         }
         #site-description {
            color: var(--complementary-color);
            font-size: 1.5rem;
            font-weight: bold;
         }
         #tag-line {
            color: white;
            font-size: 1.15rem;
         }
         #site-description, #tag-line {
            margin: 0;
            padding: 0;
         }
      `,
   ];

   constructor() {
      super();
      this.siteDescription = "<Company Name>";
      this.tagLine = "<Company Tag Line>";
   }

   render() {

      return html`
         <header>
            <div id="header-metadata">
               <p id="site-description">${this.siteDescription}</p>
               <p id="tag-line">${this.tagLine}</p>
            </div>
            <navigation-bar id="main-navigation"></navigation-bar>
         </header>
      `;
   }

}

customElements.define("site-header", SiteHeader);