"use client";

import axios from 'axios'
import { error } from 'console';
import React, { useEffect, useState } from 'react'

const Request = () => {
    const [data, setData] = useState([]);
    const [dataGetById, setDataGetById] = useState([]);
    const [dataPut, setDataPut] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => setData(res.data))
            .catch(error => Error(error))
      
        axios.get('https://rickandmortyapi.com/api/character/2')
            .then(res => setDataGetById(res.data))
            .catch(error => Error(error))

        axios.put('https://rickandmortyapi.com/api/character/', {
            "name": "Rick Sanchez",
            "status": "Alive",
        })

        axios.delete('https://rickandmortyapi.com/api/character/')
    }, [])

    console.log(data);
    console.log(dataGetById);
    
    
    
  return (
    <div>Check the console</div>
  )
}

export default Request;