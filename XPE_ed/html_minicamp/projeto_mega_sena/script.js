console.log("testando script");

var board = [];
var current_game = [1, 5, 11, 13, 15, 17];
var saved_games = [];

//objeto criado para guardar o estado da aplicação
var state = {
    board: [],
    current_game: [],
    saved_games: [],
}

function start() {
    // console.log("start")
    create_game();
    new_game();
}

start();

function new_game() {
    reset();
    render();
}
//render - criação dos elementos visuais da página - react usa muito
function render() {
    render_board();
}

function render_board() {
    var div_board = document.querySelector('#Mega-numbers')

    div_board.innerHTML = "";

    var ul_numbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++) {
        var current_number = state.board[i];


        var li_num = document.createElement('li');
        li_num.textContent = current_number;
        li_num.addEventListener('click', handleNumberClick);

        ul_numbers.appendChild(li_num);
    }
    div_board.appendChild(ul_numbers);

}

function handleNumberClick(event) {
    //a variavel passada aqui vem de "presente" através do ckick.
    var value = Number(event.currentTarget.textContent);
    if (test_repetition(value)) {
        removenumber(value);
    } else {
        addnumber(value)
    }
    console.log(state.current_game)
}

function addnumber(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("Número inválido", numberToAdd)
        return;
    }
    if (state.current_game.length >= 6) {
        console.error("O jogo está completo");
        return;
    }
    if (test_repetition(numberToAdd)){
        console.error("este número já está no jogo", numberToAdd)
        return;
    }

    //so aceita número de 1 até 60 e se tiver 6 números 
    state.current_game.push(numberToAdd)
}

function test_repetition(check_number) {
    if (state.current_game.includes(check_number)){
        return true;
    }
    return false;
}

function removenumber(numberToRemove) {
    var newGame = [];
    for (var i = 0; i < state.current_game.length; i++) {
        var currentNumber = state.current_game[i];
        if (currentNumber === numberToRemove) {
            continue; //continua e n faz nada
        }
        newGame.push(currentNumber);
    }
    state.current_game = newGame;

}

function save_game() {
    if (!game_completo) {
        console.error("o jogo não está completo");
        return;
    }
    state.saved_games.push(state.newGame)
}

function game_completo() {
    return stat.current_game.length === 6;
}

function reset() {
    state.current_game = [];
}

function create_game() {
    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}