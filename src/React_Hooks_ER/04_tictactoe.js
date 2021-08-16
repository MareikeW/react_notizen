// 04 useState - Tic Tac Toe
/*
We’re going to build tic-tac-toe (with localStorage support)! If you’ve gone through React’s official tutorial, 
this was lifted from that (except that example still uses classes).

You’re going to need some managed state and some derived state:

Managed State: State that you need to explicitly manage
Derived State: State that you can calculate based on other state
squares is the managed state and it’s the state of the board in a single-dimensional array:
[
  'X', 'O', 'X',
  'X', 'O', 'O',
  'X', 'X', 'O'
]
This will start out as an empty array because it’s the start of the game.

nextValue will be either the string X or O and is derived state which you can determine based on 
the value of squares. We can determine whose turn it is based on how many “X” and “O” squares there are. 
We’ve written this out for you in a calculateNextValue function at the bottom of the file.

winner will be either the string X or O and is derived state which can also be determined based on the 
value of squares and we’ve provided a calculateWinner function you can use to get that value.
*/

import * as React from 'react'
// Custom Hook, die in verschiedenen Komponenten wiederverwendet werden kann.
function useLocalStorageState(key, defaultValue = "") {
    const [state, setState] = React.useState(
      () => window.localStorage.getItem(key) || defaultValue
    )
  
    React.useEffect(() => {
      window.localStorage.setItem(key, state)
    }, [key, state])
  
    return [state, setState];
}

function Board() {
  // 🐨 squares is the state for this component. Add useState for squares
  const [squares, setSquares] = useLocalStorageState(
    "squares",
    Array(9).fill(null)
  );

  // 🐨 We'll need the following bits of derived state:
  // - nextValue ('X' or 'O')
  const nextValue = calculateNextValue(squares);
  // - winner ('X', 'O', or null)
  const winner = calculateWinner(squares);
  // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
  const status = calculateStatus(winner, squares, nextValue);
  // 💰 I've written the calculations for you! So you can use my utilities
  // below to create these variables

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `4`.
  function selectSquare(square) {
    if (winner || squares[square]) {
      return
    }
    
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      {/* 🐨 put the status in the div below */}
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App04TicTacToe() {
  return <Game />
}

export default App04TicTacToe;