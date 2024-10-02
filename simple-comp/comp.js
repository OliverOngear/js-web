/* Compobramos que accedimos al script */
console.log("se accedio al componente")

class MiComponente extends HTMLElement {
    constructor() {
        super();
        
        /* Comprobamos el procesos de creacion */
        console.log("se accedio al componente")

        /* guardamos la ruta del arbol doom en una costante */
        const shadow = this.attachShadow({ mode: 'open' });

        /* creamos el nuevo elemento que se va a insertar */
        const container = document.createElement('div');

        /* Agregamos el contenido al elemento*/
        container.textContent = '¡Soy un componente nuevo!';

        /* Insertamos el elemento al arbol del dom */
        shadow.appendChild(container);
    }
}
/* Se llama al elemento y se aplica el componente */
customElements.define('simple-component', MiComponente);

/* el elemento html debe estar separado por - */
