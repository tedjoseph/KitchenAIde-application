import { html, css, LitElement } from 'lit';

export class UserSettings extends LitElement {
   
   static properties = {
      
   }
   
   static styles = [
      css`
         #user-settings {
            padding: 3px;
            text-align: left;
         }
         ul {
            margin: 0;
         }
         li {
            list-style-type: none;
            padding-bottom: 2px;
         }
      `,
   ]

   constructor() {
      super();
   }

   render() {
   
      return html`
         <div id="user-settings">
            <label>User</label>
            <ul>
               <li><a href="#">Preferences</a></li>
               <li><a href="../public/login-page.html">Logout</a></li>
            </ul>
         </div>
      `;
   }

}

customElements.define('user-settings', UserSettings);