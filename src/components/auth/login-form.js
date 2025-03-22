import { html, css, LitElement } from 'lit';
import { company } from '../../../assets/assets.js'

export class LoginForm extends LitElement {

   static properties = {
      username: { type: String },
      password: { type: String },
   };

   static styles = css`
      :host {
         background: white;
         border-radius: 8px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
         padding: 2rem;
         width: 380px;
      }
      h3 {
         color: #0039A6;
         margin: 10px 0px 20px;
         text-align: center;
      }

      h4 {
         color: #0039A6;
         margin-top: 1rem;
         text-align: center;
      }
      label {
         color: #333;
         display: block;
         font-size: 0.9rem;
         margin-bottom: 0.3rem;
         width: 100%;
      }
      main {
         align-items: center;
         display: flex;
         flex-direction: column;
         padding: 0 10px;
      }
      #image-container {
         display: flex;
         justify-content: space-around;
         width: 100%;
      }
      img {
         margin: 5px 0;
         padding: 5px 0;
         width: 33%;
      }
      input {
         border: 1px solid #ccc;
         box-sizing: border-box;
         border-radius: 4px;
         font-size: 1rem;
         margin-bottom: 1rem;
         padding: 0.6rem;
         width: 100%;
      }

      form {
         align-items: center;
         display: flex;
         flex-direction: column;
         width: 80%;
         padding: 0px;
         margin: 0px;
      }

      button {
         background-color: #0039A6;
         border: none;
         border-radius: 4px;
         color: white;
         cursor: pointer;
         font-size: 1rem;
         margin-top: 1rem;
         padding: 1rem;
         transition: background 0.3s ease;
         width: 100%;
      }

      button:disabled {
         background-color: #ccc;
         cursor: not-allowed;
      }

      button:hover {
         background-color: #0868ce;
      }
   `;

   constructor() {
      super();
      this.username = '';
      this.password = '';
      this.applicationName = '<Application Name>';
   }

   updateInput(event) {
      this[event.target.id] = event.target.value;
   }

   handleSubmit(event) {
      event.preventDefault();
      if (this.username && this.password) {
         console.log('Logging in with:', this.username, this.password);
         window.location.href = '../views/app.html';
      }
   }


   render() {
      return html`
         <main>
            <div id="image-container">
               <img src=${company.logo} alt="company-logo">
               <img src=${company.descriptor} alt="company-descriptor">
            </div>
            <h3>Welcome to the ${this.applicationName}</h3>
            <form @submit=${this.handleSubmit}>
               <label for="username">Username:</label>
               <input id="username" type="text" placeholder="Enter username" @input=${this.updateInput} required />
               
               <label for="password">Password:</label>
               <input id="password" type="password" placeholder="Enter password" @input=${this.updateInput} required />
               
               <button type="submit" ?disabled=${!this.username || !this.password}>Login</button>
            </form>
         </main>
      `;
   }
}

customElements.define('login-form', LoginForm);
