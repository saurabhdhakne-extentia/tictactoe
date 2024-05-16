import { GameTurnsType } from "../types";

export default function Logs({turns}:{turns:GameTurnsType}){
   return(
    <ol className="mt-10 w-[200px] min-h-10 bg-indigo-500 px-2 py-1 rounded">
        <h5 className="text-xl mb-2 font-bold">LOGS</h5>
        
        {turns.map(turn=><li className="bg-indigo-700 rounded p-1 mb-1" key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
    </ol> 
   )
}