import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getGamesName } from '../../Redux/action'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('You must enter a name')
        } else {
            dispatch(getGamesName(name))
            setName('')
        }
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} >
            <div>
                <input 
                type="text" 
                id='search' 
                value={name} 
                placeholder="search games..." 
                autoComplete="off" 
                onChange={(e) => handleInputChange(e)} />
                <button type="submit" > Search </button>
            </div>
        </form>
    )
}