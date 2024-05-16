// type BoardState = Array<Array<string | null>>;
// const boardState:BoardState = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

export default function Board({onSelectSquare, board }:{onSelectSquare: any, board: any}) {

    return (
        <>
            {board.map((row:any, rowIndex:number) => (
                <li key={rowIndex}>
                    <ol className="flex">
                        {row.map((playerSymbol:any, colIndex:number) => (
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