import { html, css, LitElement } from 'lit';

export class SearchBox extends LitElement {
   
   static properties = {
      "" : {}
   }
   
   static styles = [
      css`
         .search-input{
            background: #FFFFFF;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19'><path fill='%23838D99' d='M13.98 12.57a2 2 0 0 1 1.93.52l2.5 2.5a2 2 0 0 1-2.82 2.82l-2.5-2.5a2 2 0 0 1-.52-1.93l-1.38-1.37a7 7 0 1 1 1.42-1.42l1.37 1.38zm-3.37-2.03a5 5 0 1 0-7.08-7.08 5 5 0 0 0 7.08 7.08z'></path></svg>");
            background-repeat: no-repeat;
            background-position: 10px 10px;
            background-size: 20px 20px;
            border: 1px solid #C5CBD5;
            box-shadow: inset 0 1px 4px 0 rgba(0,0,0,0.20);
            border-radius: 8px;            
            font-size: 16px;
            line-height: 1.5;
            padding: .5rem 1rem .5rem 2.5rem;
         } 
         .search-input::placeholder{
            color: #838D99;
         }
         .search-input:focus {
            border: 1px solid #84A2FA;
            outline: none;
         }
      `,
   ]

   constructor() {
      super();
   }

   render() {
   
      return html`
         <input class="search-input" type="search" placeholder="Search">
      `;
   }

}

customElements.define('search-box', SearchBox);