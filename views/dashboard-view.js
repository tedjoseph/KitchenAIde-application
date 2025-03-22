import { html, css, LitElement } from "lit";
import { SiteHeader } from "site-header";
import { NavigationBar } from "navigation-bar";
import { Sidebar } from "side-bar";
import { MainContent } from "main-content";

export class DashboardView extends LitElement {

   static styles = css`
      :host {
         display: flex;
         flex-direction: column;
         height: 100vh;
         justify-content: center;
         margin: 0;
         overflow: hidden;
         text-align: center;
      }
      main-content {
         flex-grow: 1;
         overflow: hidden;
      }
      .content-wrapper {
         display: flex;
         flex-grow: 1;
         overflow: hidden;
      }
      side-bar {
         flex-shrink: 0;
         height: 100%;
         max-width: 350px;
         min-width: 350px;
         overflow-y: auto;
         width: 350px;
      }
      site-footer {
         padding: 0px;
      }
   `;

   constructor() {
      super();
   }

   render() {
      return html`
         <site-header></site-header>
         <div class="content-wrapper">
            <side-bar></side-bar>
            <main-content></main-content>
         </div>
      `;
   }
}

customElements.define("dashboard-view", DashboardView);
