import { useState } from "react"


export default function Player({name,symbol, isActive}:{name:string, symbol:string, isActive:Boolean}) {
    const [isEditiing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setPlayerName(event.target.value)
    }

    return (
        <>
            <li className={`${isActive && 'bg-indigo-800'} p-2 rounded text-sm mx-10`}>
                <span className='px-5 bg-indigo-600 rounded py-2'>
                     <input type="text" value={playerName} disabled={!isEditiing} className="bg-transparent w-24 focus:outline-none" onChange={handleNameChange} />
                </span>
                <span className='px-4 py-2 bg-indigo-600 rounded mx-2'>
                    {symbol}
                </span>
                <button className='px-5 py-2 bg-indigo-600 rounded font-normal w-24 text-center' onClick={()=> setIsEditing(editing => !editing)}>
                    {isEditiing ? 'Save' : 'Edit'}
                </button>
            </li>
        </>
    )
}