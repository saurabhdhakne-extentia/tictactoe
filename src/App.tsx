import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import Board from './components/Board'
import Logs from './components/Logs'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver'
import { GameTurnsType, BoardState, PlayersType } from './types';

const INITIAL_GAME_BOARD: BoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS: PlayersType = {
  X:'Player 1',
  O:'Player 2' 
};

function deriveActivePlayer(gameTurns: GameTurnsType) {

  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}


function deriveWinner(gameBoard:BoardState, player:PlayersType){
  
  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = player[firstSquareSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns:GameTurnsType){
  
  let gameBoard = [...INITIAL_GAME_BOARD.map(array=>[...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square
    gameBoard[row][col] = player
  }

  return gameBoard
}

function App() {
  const [player, setPlayer]= useState<PlayersType>(PLAYERS)
  const [gameTurns, setGameTurns] = useState<GameTurnsType>(()=> [])
  // const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = deriveActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)

  const winner = deriveWinner(gameBoard, player); 

  const hasDraw = gameTurns.length === 9 && !winner
  function handleSelectSquare(rowIndex: number, colIndex: number) {
    // setActivePlayer(()=>(activePlayer === 'X' ? 'O' : 'X' ))
    setGameTurns((prevTurn: GameTurnsType) => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn
      ]

      return updateTurns
    })
  }

  function handlRestartMatch(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol:string, newName:string){
    setPlayer((prevPlayer:PlayersType)=>{
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }
  return (
    <>
      <div className="container">
        <h1 className='mx-auto  font-extrabold'>Tic Tac Toe</h1>

        <ul className='mt-10 flex w-full '>
          <Player name={PLAYERS.X} symbol='X' isActive={activePlayer === 'X' && true} onChangeName={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol='O' isActive={activePlayer === 'O' && true} onChangeName={handlePlayerNameChange} />
        </ul>
        <div className="flex">
          <ol className={`bg-indigo-500 rounded w-[340px] h-[340px] mx-auto mt-10`}>
            { (winner || hasDraw ) &&
            <div className="flex flex-col  items-center justify-center bg-indigo-950 bg-opacity-70 absolute w-[340px] h-[340px]">
              <GameOver winner={winner} handlRestartMatch={handlRestartMatch} />
            </div>
            }
            <div className="p-5">
            <Board onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
          </ol>
          <Logs turns={gameTurns} />
        </div>

      </div>
    </>
  )
}

export default App
