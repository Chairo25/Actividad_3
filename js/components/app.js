class AppComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <header-component></header-component>
        <nav-component></nav-component>
        <main>
          <table-component></table-component>
        </main>
        <footer-component></footer-component>
      `;
    }
  }
  customElements.define('main-app', AppComponent);  