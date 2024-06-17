"use client";

import React, { useEffect, useState } from 'react'

import styles from "@/styles/Episodes.module.css";

import Loader from '@/components/Loader';
import CharacterCard from '@/components/CharacterCard';
import axios from 'axios';

const url = "https://rickandmortyapi.com/api/";

const Characters = () => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function fetchEpisodes() {
      const instance = axios.create({
        baseURL: url,
      });

      setIsLoading(true);

      try {
        const response = await instance('character');
        
        setResult(response.data.results);
      } catch (error) {
        setIsError(error);
      }
    }

    
    
    useEffect(() => {
        fetchEpisodes();
    }, []);
    

  return (
    <div className={styles.cards}>
        {isLoading && isError ? <Loader /> : result.map((character) => (
            <CharacterCard info={character} />
        ))}
    </div>
  )
}

export default Characters;