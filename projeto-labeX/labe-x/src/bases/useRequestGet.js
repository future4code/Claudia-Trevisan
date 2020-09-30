import Axios from 'axios';
import React, { useState, useEffect }from 'react';
import axios from 'axios'


export function useRequestGet (url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() =>{
        axios
        .get(url)
        .then((response) =>{
            setData(response.data)
        })
    }, [url])

    return data
}
