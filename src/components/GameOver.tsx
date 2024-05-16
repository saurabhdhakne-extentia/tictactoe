export default function GameOver({winner, handlRestartMatch}:{winner:string|undefined, handlRestartMatch:any}){
    return(
        <>
            <h1 className="text-indigo-200 font-extrabold">Game Over!</h1>
            <h2 className="mb-10 mt-2 font-bold text-white text-4xl">{winner} {winner ? 'Won!' : "It's a Draw!"}</h2>
            <button 
                onClick={handlRestartMatch} 
                className="bg-transparent border-spacing-1 border-indigo-400 rounded hover:bg-indigo-400 focus:outline-none"
            >
                    Rematch
            </button>
        </>
    )
}