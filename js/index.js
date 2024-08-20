function calc(num){
    var numero = document.getElementById('result').innerHTML;
    if(numero){
       document.getElementById('result').innerHTML = eval(numero);
    }else{
        document.getElementById('result').innerHTML = "nada...";
    }
}

///////////////

function insert(num){
    var numero = document.getElementById('result').innerHTML;
     document.getElementById('result').innerHTML = numero + num;
     
}

function limpa(){
    document.getElementById('result').innerHTML = '';
}

