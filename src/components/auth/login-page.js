import { html, css, LitElement } from 'lit';
import { LoginForm } from 'login-form'
import { SiteFooter } from 'site-footer';

export class LoginPage extends LitElement {
   
   static styles = css`
      :host {
         align-items: center;
         background-color: #efeded;
         display: flex;
         flex-direction: column;
         height: 100vh;
         justify-content: center;
         width: 100%;
      }
   `;

   constructor() {
      super();
   }

   render() {
      return html`
         <login-form></login-form>
         <site-footer></site-footer>
      `;
   }
}

customElements.define('login-page', LoginPage);