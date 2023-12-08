
function pegaTexto(){
    let input: HTMLIFrameElement = document.querySelector('number')
    if(input != null){
        let number: HTMLIFrameElement = input.value;
        let res = document.querySelector ('#resultado');
        res.value = number;
    }
}