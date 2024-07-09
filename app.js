alert('Bem-vindo ao jogo do número secreto!')
let secretNumber = 5, shot, attempts = 1;
console.log(secretNumber);

while(shot != secretNumber){
    shot = prompt('Escolha um número entre 1 e 10');

    if(shot == secretNumber){
        alert('Parabéns! Você acertou o número: ' + secretNumber + ', com ' + attempts + ' tentativas.');
    } else {
        if(secretNumber > shot){
            alert('O número secreto é maior que ' + shot); 
        }else{
            alert('O número secreto é menor que ' + shot);
        }
        attempts++;
    }   
}


        
