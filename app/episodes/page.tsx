"use client";

import React, { useEffect, useState } from 'react'

import styles from "@/styles/Episodes.module.css";

import Loader from '@/components/Loader';
import EpisodesCard from '@/components/EpisodesCard';

const url = "https://rickandmortyapi.com/api/episode";

const Locations = () => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function fetchEpisodes() {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
        setResult(data.results)
        } catch (error) {
            setIsError(error);
        }

    }
    
    useEffect(() => {
        fetchEpisodes();
    }, []);
    

  return (
    <div className={styles.cards}>
        {isLoading && isError ? <Loader /> : result.map((episode) => (
            <EpisodesCard name={episode.name} date={episode.air_date} episode={episode.episode} />
        ))}
    </div>
  )
}

export default Locations;