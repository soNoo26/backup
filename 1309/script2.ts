class Menu extends HTMLElement {

    constructor() {
        
        super();
        this.innerHTML = `
        
        <header>
        
        <nav>
              <img src="./img/logo.png"  id="logo" >

           <ul class="menu">  
               <li><a href="#">HOME</a></li>
               <li><a href="./pages/configuracoes.html">REQUISITOS</a></li>
              <li><a href="./pages/faq.html">FAQ</a>
              <li><a href="./pages/sobre.html">SOBRE</a></li>
           </ul>
         </nav>
      </header>


    `
    

    }
}

    customElements.define(`meu-cabecalho`, Menu);