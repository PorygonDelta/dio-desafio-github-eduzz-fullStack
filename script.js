let order = [];
let clickedOrder = [];
let score = 0;

// amarelo = 0
// vermelho = 1
// azul = 2
// verde = 3

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//ordem aleatoria

let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	order[order.length] = colorOrder;
	clickedOrder = [];

	for(let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}
}

//acender proxima cor
let lightColor = (element, number) => {
	number = number * 500;
	setTimeout(() => {
		element.classList.add('selected');
	}, number - 250);
	setTimeout (() => {
	element.classList.remove('selected');
	});
}

//checagem
let checkOrder = () => {
	for(let i in clickedOrder) {
		if(clickedOrder[i] != order[i]) {
			gameOver();
			break;
		}
	}
	if(clickedOrder.length == order.length) {
		alert(`Pontuação: ${score}\nVocê Acertou! Iniciando Próximo Nível!!!`);
		nextLevel();
	}
}

//clique do jogador
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');

	setTimeout (() => {
		createColorElement(color).classList.remove('selected');
			checkOrder();
	},250)
}

//função retorna a cor
let createColorElement = (color) => {
	if(color == 0) {
		return yellow;
	} else if(color == 1) {
		return red;
	} else if (color == 2) {
		return blue;
	} else if(color == 3) {
		return green;
	}
}

//proximo nivel
let nextLevel = () => {
	score++;
	shuffleOrder();
}

//GAME OVER
let gameOver= () => {
	alert(`Pontuação: ${score}!\nVocê PERDEU!!!\nClique em OK para iniciar um novo jogo`);
	order = [];
	clickedOrder = [];

	playGame();
}

//função start
let playGame = () => {
	alert(`Bem Vindo ao GENIUS! Iniciando novo jogo!`);
	score = 0;

	nextLevel();
}

//clicar nas jogares
// amarelo = 0
// vermelho = 1
// azul = 2
// verde = 3
yellow.onclick = () => click(0);
red.onclick = () => click(1);
blue.onclick = () => click(2);
green.onclick = () => click(3);

//START
playGame();
