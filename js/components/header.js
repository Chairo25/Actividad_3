class HeaderComponent extends HTMLElement {
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
        <style>
          h1 { font-size: 24px; }
        </style>
        <header>
          <h1>Gestión de Proyectos y Participantes</h1>
          <p>Usuario: Admin | Rol: Gestor | Fecha: ${new Date().toLocaleDateString()}</p>
        </header>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('header-component', HeaderComponent);  