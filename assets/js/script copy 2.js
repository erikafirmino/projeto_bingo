
let sorteados = [];
const total = 75;
/*
function geraNum() {
    let numero = Math.random() * total;
}
*/

const button = document.getElementById('generate');
button.addEventListener('submit',function(event){
    event.preventDefault();

    function generate(){

        if (sorteados.length <= 1){
            document.querySelector('#msg').innerText = 'Começou !!!';
        }
        else if(sorteados.length >1 && sorteados.length <= 4){
            document.querySelector('#msg').innerText = 'Boa sorte !!!';
        }
        else{
            document.querySelector('#msg').innerText = 'Chama bola !!!';
        }

        let numero = Math.random() * total;


        /* Mostra as 5 ultimas bolas */
        if (typeof sorteados.at(-1) != 'undefined'){
            document.getElementById('num-5').innerText = sorteados.at(-1);
        } if (typeof sorteados.at(-2) != 'undefined'){
            document.getElementById('num-4').innerText = sorteados.at(-2);
        } if (typeof sorteados.at(-3) != 'undefined'){
            document.getElementById('num-3').innerText = sorteados.at(-3);
        } if (typeof sorteados.at(-4) != 'undefined'){
            document.getElementById('num-2').innerText = sorteados.at(-4);
        } if (typeof sorteados.at(-5) != 'undefined'){
            document.getElementById('num-1').innerText = sorteados.at(-5);
        };

        //Sorteia o próximo número

        if (numero == 0){
            generate();
            return;
        } else {
            for (let i = 0; i< sorteados.length; i++){

                if(sorteados[i]== numero){
                    generate();
                    return;
                };
            };
        };

        function mostraBolas(){
            const bola_chamada = document.getElementsByClassName('ball');
            
            let divs = document.querySelector('.ball', '.text'), i;
            
            for ( i=0; i < divs.length; ++i ){
                if(divs[i].innerText == numero){
                    bola_chamada.classList.add('bola_chamada');
                }
            };

            document.getElementById('text').innerText = numero;
            sorteados.push(numero);
        };

        mostraBolas();
        
    };
    generate();
});

