import React from 'react'

import styles from "@/styles/EpisodeCard.module.css";

const EpisodesCard = ({ name, date, episode }) => {
  return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{episode}</p>
    </div>
  )
}

export default EpisodesCard