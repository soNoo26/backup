"use strict";
class Elemento extends HTMLElement {
    constructor() {
        super();
        this.build();
    }
    build() {
        const shadow = this.attachShadow({ mode: "open" });
        const botao = document.createElement("button");
        botao.innerText = "Clique em mim";
        shadow.appendChild(botao);
    }
    styles() {
        const style = document.createElement("style");
        style.innerText = `
    button{
        color: red;
    }
    `;
        return style;
    }
}
customElements.define("meu-elemento", Elemento);
