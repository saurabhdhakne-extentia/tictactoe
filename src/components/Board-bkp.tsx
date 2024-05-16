import {useState} from 'react'
type BoardState = Array<Array<string | null>>;
const boardState:BoardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Board({onSelectSquare, activePlayerSymbol}:{onSelectSquare: any,activePlayerSymbol:string}) {
    const [gameBoard, setGameBoard] = useState<BoardState>(boardState)
    
    function handleSelectSquare(rowIndex:number, colIndex:number){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })
        
        onSelectSquare()

    }

    return (
        <ol className=" bg-indigo-500 rounded p-5 w-[340px] mx-auto mt-10">
            {gameBoard.map((row, rowIndex:number) => (
                <li key={rowIndex}>
                    <ol className="flex">
                        {row.map((playerSymbol, colIndex:number) => (
                            <li key={colIndex} className="w-[100px] h-[100px] p-2">
                                <button onClick={()=>handleSelectSquare(rowIndex, colIndex)} className="w-full text-4xl h-full flex justify-center items-center rounded bg-indigo-700 focus:outline-none">
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}