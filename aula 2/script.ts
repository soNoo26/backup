function somar(){
    let numero_1 : HTMLInputElement|null=document.querySelector('#numero1')
    let numero_2 : HTMLInputElement|null=document.querySelector('#numero2')

    if(numero_1 && numero_2 && numero_2 && numero_1.value != "" && numero_2.value != ""){
    alert(parseFloat(numero_1.value) + parseFloat(numero_2.value))
    }
}