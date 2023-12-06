
const button = document.getElementById('generate');
button.addEventListener('click', function(){

    let sorteados = [];

    const letters = ['B', 'I', 'N', 'G', 'O'];
    const letter = Math.floor(Math.random() * letters.length);
    let drawnLetter =  letters[letter]; 

    const B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const I = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const N = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    const G = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 66, 57, 58, 59, 60];
    const O = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

    if (drawnLetter === 'B'){
        const numberB = Math.floor(Math.random() * B.length);
        let drawnB = B[numberB];
        sorteados.push(drawnB);
        let result = drawnLetter +' '+ drawnB;


        document.querySelector('#num-drawn > span').textContent = result;
    }
    else if (drawnLetter === 'I'){
        
        const numberI = Math.floor(Math.random() * I.length);
        let drawnI = I[numberI];
        let result = drawnLetter +' '+ drawnI;
        sorteados.push(drawnI);
        document.querySelector('#num-drawn > span').textContent = result;
    }
    else if (drawnLetter === 'N'){
        
        const numberN = Math.floor(Math.random() * N.length);
        let drawnN = N[numberN];
        let result = drawnLetter +' '+ drawnN;
        sorteados.push(drawnN);
        document.querySelector('#num-drawn > span').textContent = result;
    }
    else if (drawnLetter === 'G'){
        
        const numberG = Math.floor(Math.random() * G.length);
        let drawnG = G[numberG];
        let result = drawnLetter +' '+ drawnG;
        sorteados.push(drawnG);
        document.querySelector('#num-drawn > span').textContent = result;
    }
    else if (drawnLetter === 'O'){
        
        const numberO = Math.floor(Math.random() * O.length);
        let drawnO = O[numberO];
        let result = drawnLetter +' '+ drawnO;
        sorteados.push(drawnO);
        document.querySelector('#num-drawn > span').textContent = result;
    }

    console.log(sorteados);
});

