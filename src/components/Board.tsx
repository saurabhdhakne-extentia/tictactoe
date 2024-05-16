// type BoardState = Array<Array<string | null>>;
// const boardState:BoardState = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

import { BoardState, OnSelectSquareType } from "../types";

export default function Board({onSelectSquare, board }:{onSelectSquare: OnSelectSquareType, board: BoardState}) {

    return (
        <>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol className="flex">
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex} className="w-[100px] h-[100px] p-2">
                                <button 
                                    onClick={()=>onSelectSquare(rowIndex, colIndex)} 
                                    disabled={playerSymbol !== null}
                                    className="w-full text-4xl h-full flex justify-center items-center rounded bg-indigo-700 focus:outline-none"
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </>
        
    )
}