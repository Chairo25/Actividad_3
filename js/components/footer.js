class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const template = document.createElement('template');
      template.innerHTML = `
        <footer>
          <p>&copy; 2024 Gestión de Proyectos y Participantes. Todos los derechos reservados.</p>
        </footer>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('footer-component', FooterComponent);  