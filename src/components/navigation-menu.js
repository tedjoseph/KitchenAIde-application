import { html, css, LitElement } from "lit";

export class NavigationMenu extends LitElement {

   static properties = {
      selectedMenu: { type: String },
   };

   static styles = css`
      :host {
         display: flex;
         flex-direction: column;
         justify-content: center;
         margin: 10px;
         padding: 10px;
      }
      .menu-item {
         background-color: #0078d4;
         border-radius: 4px;
         color: #fff;
         cursor: pointer;
         margin-bottom: 5px;
         padding: 10px;
         transition: background 0.3s;
      }

      .menu-item:hover {
         background-color: #005a9e;
      }

      .submenu {
         background-color: #e3f2fd;
         border-left: 3px solid #0078d4;
         margin-top: 5px;
         padding: 10px;
      }
   `;

   constructor() {
      super();
      this.selectedMenu = "";
   }

   render() {
      return html`
      `;
   }
   
}

customElements.define("navigation-menu", NavigationMenu);