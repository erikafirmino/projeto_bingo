
const button = document.getElementById('generate');
button.addEventListener('click', function(){

    let numerosSorteados = [];

    function gerarNum(){
        
        while(numerosSorteados.length < 75){

            let numero = Math.floor(Math.random() * 75) + 1;

            if(! numerosSorteados.includes(numero)){
                numerosSorteados.push(numero);
                
                if(numero <= 15){
                    document.querySelector('#num-drawn > span').textContent = `B ${numero}`;
                }else if(numero <= 30){
                    document.querySelector('#num-drawn > span').textContent = `I ${numero}`;
                }else if(numero <= 45){
                    document.querySelector('#num-drawn > span').textContent = `N ${numero}`;           
                }else if(numero <= 60){
                    document.querySelector('#num-drawn > span').textContent = `G ${numero}`;
                }else{
                    document.querySelector('#num-drawn > span').textContent = `O ${numero}`;
                };
            };
        };
    };
    gerarNum();
        
});
