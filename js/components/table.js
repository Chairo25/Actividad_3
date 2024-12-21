class TableComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.data = [];
    }
  
    connectedCallback() {
      this.fetchData();
      this.render();
    }
  
    fetchData = async () => {
      try {
        const response = await fetch('/api/relations'); // Ajustar según la API
        this.data = await response.json();
        this.render();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    render() {
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          table { border: 1px solid #ddd; }
        </style>
        <table>
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Participante</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map(row => `
              <tr>
                <td>${row.project}</td>
                <td>${row.participant}</td>
                <td>
                  <button data-id="${row.id}" class="edit">Editar</button>
                  <button data-id="${row.id}" class="delete">Eliminar</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('table-component', TableComponent);  