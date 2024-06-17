import React from 'react'

import styles from "@/styles/LocationCard.module.css"

const LocationCard = ({ location, type }) => {
  return (
    <div className={styles.card}>
        <h2>{location}</h2>
        <p>{type}</p>
    </div>
  )
}

export default LocationCard;