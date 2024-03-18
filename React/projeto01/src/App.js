import logo from './logo.svg';
import './App.css';

function App() {
    const name = "Vinicius";
    var novo_nome = name.toLocaleUpperCase();

    function soma (a,b){
        return a+b;

    }
    const url = "www.bla.com.br";

    return ( 
    <div className = "App" >
        <h1 > Olá primeiro teste jsx</h1>  
        <p > primeira aplicação do {name} </p> 
        <p>soma = {soma(1,2)}</p>
        <img src = {url} alt="minha imagem"></img>
    </div>

    );
}

export default App;