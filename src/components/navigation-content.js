import { html, css, LitElement } from 'lit';
import { NavigationMenu } from './navigation-menu.js';
import { SearchBox } from './utils/search-box.js';

export class NavigationContent extends LitElement {

   static styles = [
      css`
         :host {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
         }
         navigation-menu {
            flex-grow: 1;
         }
      `
   ];

   constructor() {
      super();
   }

   render() {
      return html`
         <search-box></search-box>
         <navigation-menu></navigation-menu>
      `;
   }
   
}

customElements.define('navigation-content', NavigationContent);