/* Compobramos que accedimos al script */
console.log("se accedio al componente")

class MiComponente extends HTMLElement {
    constructor() {
        super();
    }

    /* Se llama a una funcion que inserta el html */

    connectedCallback(){

        /* Indicamos el html que se va a insertar */
        this.innerHTML= `
        <div>
        <h1>Insercion</h1>
        <p>Se inserta codigo html directamente</p>
        </div>
        `;
    }
    
}
/* Se llama al elemento y se aplica el componente */
customElements.define('html-comp', MiComponente);

/* el elemento html debe estar separado por - */