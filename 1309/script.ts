
class Formulario extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <main>
        <h1>Bem vindo, piranha!</h1>
        <input type="text">
        <input type="text">
        <button>Entrar</button>
       </main>`

       this.id = 'main'
       this.style.display= 'flex';
       this.style.flexDirection = 'colum';
        }
}
customElements.define(`meu-formulario`, Formulario);