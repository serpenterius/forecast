import { useState } from 'react'

import { getGeo } from '../../features/getGeo'

import './Inputs.css'

export function Inputs({setQuery}) {
    const [value, setValue] = useState('')

    return (
        <div className='inputs'>
            <input onChange={(e) => setValue(e.currentTarget.value)} type="text" value={value} />
            <button onClick={() => setQuery(value)}>Search</button>
            <button onClick={() => getGeo(setQuery)}>Geolocation</button>
        </div>
    )
}