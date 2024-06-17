import Image from 'next/image'
import React from 'react'

import styles from '@/styles/CharacterCard.module.css'

import characterImg from "@/public/_image_.png"

const CharacterCard = ({ info }) => {
  return (
    <div className={styles.card}>
        <img src={info.image} alt={info.name} />
        <div className={styles.card_text}>
            <h2 className={styles.card_title}>{info.name}</h2>
            <p>{info.species}</p>
        </div>
        
    </div>
  )
}

export default CharacterCard