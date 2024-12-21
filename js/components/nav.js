class NavComponent extends HTMLElement {
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
          nav a { margin: 0 15px; color: white; text-decoration: none; }
        </style>
        <nav>
          <a href="#projects">Proyectos</a>
          <a href="#participants">Participantes</a>
        </nav>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('nav-component', NavComponent);  