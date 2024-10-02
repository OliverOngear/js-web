/* Compobramos que accedimos al script */
console.log("se accedio al componente")

class MiComponente extends HTMLElement {
    constructor() {
        super();

        /* Comprobamos el procesos de creacion */
        console.log("se inicio el constructor")
        
        /*Se inserta el contenido en el Doom */
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
        <div class="cont">
        <h1>contenido html</h1>
        <p>viible desde el html</p>
        </div>
        `;

        /* se agrega el elemento al arbol del dom */
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

/* Se llama al elemento y se aplica el componente */
customElements.define('html-comp', MiComponente);

/* el elemento html debe estar separado por - */