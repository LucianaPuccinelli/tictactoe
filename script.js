var botoes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var player = true, jogadas = 0;

var jogada = function(valor){
    if(player && botoes[valor] == 0){
        player = false
        botoes[valor] = 1
        document.getElementById(valor).src="./imagens/X.png"
        jogadas++;
        ganhou()
    }else if(!player && botoes[valor] == 0){
        player = true
        botoes[valor] = 2
        document.getElementById(valor).src="./imagens/0.png"
        jogadas++;
        ganhou()
    }
}

var zerar = function(){
    for(let i=0; i<9; i++){
        botoes[i] = 0
        document.getElementById(i).src="./imagens/nada.png"
    }
    player = true
    jogadas = 0
}

var ganhou = async function(){
    await new Promise(r => setTimeout(r, 10));
    if(botoes[0] == 1 && botoes[1] == 1 && botoes[2] == 1 || botoes[3] == 1 && botoes[4] == 1 && botoes[5] == 1 || botoes[6] == 1 && botoes[7] == 1 && botoes[8] == 1 || botoes[0] == 1 && botoes[4] == 1 && botoes[8] == 1 || botoes[2] == 1 && botoes[4] == 1 && botoes[6] == 1 || botoes[0] == 1 && botoes[3] == 1 && botoes[6] == 1 || botoes[1] == 1 && botoes[4] == 1 && botoes[7] == 1 || botoes[2] == 1 && botoes[5] == 1 && botoes[8] == 1){
        alert("Jogador X ganhou!")
        zerar()
    }else if(botoes[0] == 2 && botoes[1] == 2 && botoes[2] == 2 || botoes[3] == 2 && botoes[4] == 2 && botoes[5] == 2 || botoes[6] == 2 && botoes[7] == 2 && botoes[8] == 2 || botoes[0] == 2 && botoes[4] == 2 && botoes[8] == 2 || botoes[2] == 2 && botoes[4] == 2 && botoes[6] == 2 || botoes[0] == 2 && botoes[3] == 2 && botoes[6] == 2 || botoes[1] == 2 && botoes[4] == 2 && botoes[7] == 2 || botoes[2] == 2 && botoes[5] == 2 && botoes[8] == 2){
        alert("Jogador O ganhou!")
        zerar()
    }else if(jogadas == 9){
        alert("Deu velha!")
        zerar()
    }
}