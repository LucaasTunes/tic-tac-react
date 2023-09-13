import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="texto" >
        <p>Player 1</p>
    </div>
    <div class="Vitória">
        <p></p>
    </div>
    
<section id="squares">
    
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
</section>
    </div> 
  );
}

export default App;
const squares = document.querySelectorAll(".square");
const texto = document.querySelector(".texto");
let gameOver = false; // Variável para controlar o estado do jogo

let XO = 1; // Inicialmente, definimos como "X"

squares.forEach((quadrado) => {
  quadrado.addEventListener('click', () => {
    if (!gameOver && quadrado.textContent === "") {
      switch (XO) {
        case 1:
          quadrado.textContent = "X";
          quadrado.style.fontSize = "85px";
          texto.textContent = "Player 2";
          XO = 2; // Alterna para "O"
          break;
        case 2:
          quadrado.textContent = "O";
          quadrado.style.fontSize = "85px";
          texto.textContent = "Player 1";
          XO = 1; // Alterna para "X"
          break;
      }

      verificarVitoria(); // Verificar vitória após cada jogada
    }
  });
});

const posiçãoV = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
  [0, 4, 8], [2, 4, 6] // Diagonais
];

function verificarVitoria() {
  for (const combinação of posiçãoV) {
    const [a, b, c] = combinação;
    const conteudoA = squares[a].textContent;
    const conteudoB = squares[b].textContent;
    const conteudoC = squares[c].textContent;

    if (conteudoA && conteudoA === conteudoB && conteudoA === conteudoC) {
      texto.textContent = `Player ${conteudoA} venceu!`;
      gameOver = true; // Define o jogo como encerrado
      return; // Sai da função, pois não é necessário verificar outras combinações
    }
  }
}
