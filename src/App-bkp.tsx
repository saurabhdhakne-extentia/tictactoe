import { useState } from 'react'
import './App.css'
import Player from './components/Player-bkp'
import Board from './components/Board-bkp'

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleActivePlayer(){
    setActivePlayer(()=>(activePlayer === 'X' ? 'O' : 'X' ))
  }

  return (
    <>
        <div className="container">
         <h1 className='mx-auto'>Tic Tac Toe</h1>

         <ul className='mt-10 flex w-full '>
            <Player name='Player 1' symbol='X' isActive={activePlayer === 'X' && true} />
            <Player name='Player 2' symbol='O' isActive={activePlayer === 'O' && true }/>
         </ul>
         <Board onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer} />
        </div>
    </>
  )
}

export default App
