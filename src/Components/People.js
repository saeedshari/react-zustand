import React from 'react'
import {usePeopleStore} from '../store'

function People() {

    const people = usePeopleStore( state => state.people)

    return (
        <div>
            <p>we have {people.length} in our DB</p>
            <ul>
                {people.map((item, index) => (
                     <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default People
