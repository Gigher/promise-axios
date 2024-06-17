"use client";

import React, { useEffect, useState } from 'react'

import LocationCard from '@/components/LocationCard';
import styles from '@/styles/Location.module.css';
import Loader from '@/components/Loader';

const url = "https://rickandmortyapi.com/api/location";

const Locations = () => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setResult(data.results);
        })
        .catch(error => setIsError(true))
        .finally(() => setIsLoading(false));

    }, []);
    
    
    

  return (
    <div className={styles.cards}>
        {isLoading && isError ? <Loader /> : result.map((location) => (
            <LocationCard key={location.id} location={location.name} type={location.type} />
        ))}
    </div>
  )
}

export default Locations;