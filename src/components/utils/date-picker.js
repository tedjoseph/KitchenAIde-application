import { html, css, LitElement } from "lit";

export class DatePicker extends LitElement {

   static styles = [
      css`
         :host {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
         }

         #date-prompt {
            margin: 0.5rem;
         }

         #date-selector {
            padding: 10px;
         }

         button {
            width: 50%;
         }

      `,
   ];

   constructor() {
      super();
      this.currentDate = this.getCurrentDate();
      this.minYear = 1999; // Earliest selectable year; chosen to align with appropriate date ranges.
      this.selectedDate = "";
   }

   getCurrentDate() {
      const today = new Date();
      return `${today.toJSON().split("T")[0]}`;
   }

   getSelectedDate() {
      const dateControl = this.shadowRoot.querySelector("#date-input");
      if (dateControl) {
         this.selectedDate = dateControl.value;
      } else {
         console.error("Date control not found!");
      }
   }

   _handleSubmitClick(event) {
      this.getSelectedDate();
      this.dispatchEvent(new CustomEvent('submit-request', {
         detail: {
            date: this.selectedDate,
            //TODO: Report Type
         },
         bubbles: true,
         composed: true
      }));
   }

   render() {
      return html`
         <p id="date-prompt">Select a date below:</p>
         <div id="date-selector">
            <label for="date-input">Date:
               <input type="date" id="date-input" min="${this.minYear}-01-01" max=${this.currentDate}>
            </label>
         </div>
         <button @click=${this._handleSubmitClick}>Submit</button>
      `;
   }

}

customElements.define("date-picker", DatePicker);