

class Cabecalho extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        this.build(shadow);
    }

    build(shadow: ShadowRoot){
        const style: HTMLLinkElement = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./style.css";

        const header: HTMLElement = document.createElement("header");
        const div_titulo: HTMLDivElement = document.createElement("div");
        const div_link: HTMLDivElement = document.createElement("div");

        const titulo: HTMLHeadingElement = document.createElement("h1");
        titulo.innerText = "TITULO";

        const link_1: HTMLAnchorElement = document.createElement("a");
        link_1.target = "_blank";
        link_1.href = "LINK";

        const link_2: HTMLAnchorElement = document.createElement("a");
        link_2.target = "_blank";
        link_2.href = "LINK";

        const link_3: HTMLAnchorElement = document.createElement("a");
        link_3.target = "_blank";
        link_3.href = "LINK";

        div_titulo.append(titulo);
        div_link.append(link_1,link_2,link_3);
        header.append(div_titulo,div_link);
        shadow.append(header,style);
    }
}

customElements.define("meu-cabecalho", Cabecalho);

class Quadrado extends HTMLElement{
    constructor(){
        super();
    }
    box(){
        const div_quadrante: HTMLDivElement = document.createElement("p")

    }
}

customElements.define("caixa", Quadrado);