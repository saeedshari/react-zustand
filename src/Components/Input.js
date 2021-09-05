import React, { useRef } from 'react'
import {usePeopleStore} from '../store'

function Input() {
    const inputRef = useRef()
    const addPerson = usePeopleStore(state=> state.addPerson)
    const addHandler = ()=>{
        addPerson(inputRef.current.value)
        inputRef.current.value = '';
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={addHandler}>Add to People</button>
        </div>
    )
}

export default Input
