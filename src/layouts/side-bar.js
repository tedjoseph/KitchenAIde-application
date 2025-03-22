import { html, css, LitElement } from "lit";
import { NavigationContent } from "../components/navigation-content.js";
import { DatePicker } from "../components/utils/date-picker.js";
import { UserSettings } from "../components/user-settings.js";
import { SharedStyles } from "../../styles/shared-styles.js";

export class Sidebar extends LitElement {
   
   static styles = [SharedStyles.styles,
      css`
         :host {
            background-color:    #f7f7f7;
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
         }

         /* ↓ Debugging Borders ↓ */
         nav > * {
            border: solid 1px black;
         }

         nav {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-around;
            overflow-y: auto;
            padding: 10px;
         }

         navigation-content {
            flex-grow: 1; // * Fills outs remaining area in sidebar ensuring visual consistency regardless of component's vertical size. 
         }
      `,
   ];

   render() {
      return html`
         <nav>
            <navigation-content></navigation-content>
            <date-picker></date-picker>
            <user-settings></user-settings>
         </nav>
      `;
   }

}

customElements.define("side-bar", Sidebar);