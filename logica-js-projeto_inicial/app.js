alert('Bem vindo ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('O numero secreto');
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt("digite um numero de 1 a 100");
    if (chute == numeroSecreto){
       break;
        alert (`voce acertou" O numero secreto é ${numeroMaximo}`);
}else{



            if (chute > numeroSecreto){
                alert(`o numero secreto é menor que ${chute}`);
            }else {
                alert(`o numero secreto é maior que ${chute}`);
            }
            tentativas++;
        }
}    

let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert (`voce acertou! O numero secreto é ${numeroSecreto} com total de ${tentativas} ${PalavraTentativa}`);
//if (tentativas > 1){
    //alert (`voce acertou" O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativas`);
//} else {
    //alert (`voce acertou" O numero secreto é ${numeroSecreto} com total de ${tentativas} tentativa`);

