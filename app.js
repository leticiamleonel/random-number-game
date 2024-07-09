alert('Bem-vindo ao jogo do número secreto!')

let shot, attempts = 1, maxNumber = 1000;
let secretNumber = parseInt(Math.random()*maxNumber+1);
console.log(secretNumber);

while(shot != secretNumber){
    shot = prompt('Escolha um número entre 1 e ' + maxNumber);

    if(shot == secretNumber){
        break;
    } else {
        if(secretNumber > shot){
            alert('O número secreto é maior que ' + shot); 
        }else{
            alert('O número secreto é menor que ' + shot);
        }
        attempts++;
    }   
}

//operador ternário: ao invés de usar if e else
let attemptsWords = attempts > 1 ? 'tentativas.' : 'tentativa.';
alert('Parabéns! Você acertou o número: ' + secretNumber + ', com ' + attempts + ' ' + attemptsWords);

        
