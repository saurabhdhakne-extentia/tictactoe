import { useState } from "react"
import { onChangeNameType } from "../types"


export default function Player({name,symbol, isActive, onChangeName}:{name:string, symbol:string, isActive:Boolean, onChangeName:onChangeNameType}) {
    const [isEditiing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setPlayerName(event.target.value)
    }

    function handleEditClick(){
        setIsEditing(editing => !editing)
        if(isEditiing){
            onChangeName(symbol, playerName)
        }
    }

    return (
        <>
            <li className={`${isActive && 'bg-indigo-800'} p-2 rounded text-sm mx-10 mb-5 flex`}>
                <span className={`${ isEditiing ? 'bg-red-400': 'bg-indigo-600' } px-5  rounded py-2`}>
                     <input type="text" value={playerName} disabled={!isEditiing} className={`bg-transparent w-24 focus:outline-none`} onChange={handleNameChange} />
                </span>
                <span className='px-4 py-2 bg-indigo-600 rounded mx-2'>
                    {symbol}
                </span>
                <button className='px-5 py-2 bg-indigo-600 rounded font-normal w-24 text-center' onClick={handleEditClick}>
                    {isEditiing ? 'Save' : 'Edit'}
                </button>
            </li>
        </>
    )
}