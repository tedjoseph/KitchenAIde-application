import { html, css, LitElement } from "lit";
import { SharedStyles } from "../../styles/shared-styles.js";

export class NavigationBar extends LitElement {
   static styles = [
      SharedStyles.styles,
      css`
         :host {
            display: flex;
            justify-content: center;
            padding: 10px;
         }

         nav {
            align-items: stretch;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            height: 100%;
            justify-content: space-evenly;
         }

         .main-nav-links {
            background-color: #5a9fd6;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            padding: 0.85rem 1rem;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            transition: background-color 0.3s ease-in-out;
         }

         .main-nav-links:hover {
            background-color: #4169e1;
         }

         .main-nav-links:active {
            background-color: #365ba5;
         }

         .logout-btn {
            background-color: #ee7231;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            padding: 0.85rem 1.2rem;
            text-transform: uppercase;
            transition: background-color 0.3s ease-in-out;
         }

         .logout-btn:hover {
            background-color: #c65c23;
         }

         .logout-btn:active {
            background-color: #7b3c1a;
         }
      `,
   ];

   constructor() {
      super();
      this.navLinks = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"];
   }

   render() {
      return html`
         <nav>
            ${this.navLinks.map((link) => {
               return html`
                  <a
                  class="main-nav-links"
                  @click="${this._handleNavClick}"
                  data-page=${link}
                  data-menu="${link}-menu"
                  >${link}</a>
               `;
            })}
            <button class="logout-btn" @click="${this._handleLogout}">
               Logout
            </button>
         </nav>
      `;
   }

   _handleNavClick(event) {
      event.preventDefault();
      const page = event.target.dataset.page;
      const menu = event.target.dataset.menu;
      if (page && menu) {
         this.dispatchEvent(
            new CustomEvent("nav-selected", {
               detail: { page, menu },
               bubbles: true,
               composed: true,
            })
         );
      }
   }

   _handleLogout() {
      window.location.href = "../public/login-page.html";
   }
}

customElements.define("navigation-bar", NavigationBar);
