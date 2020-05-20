import React, { useState, useEffect } from "react"

import styles from "../../css/items.module.css"
import Title from "../Title"
import Tour from "./Tour"

const TourList = ({ tours: { edges } }) => {
  const [values, setValues] = useState({
    tours: [],
    sortedTours: [],
  })

  useEffect(() => {
    setValues({ ...values, tours: edges, sortedTours: edges })
  }, [edges])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />

      <div className={styles.center}>
        {values.sortedTours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  )
}

export default TourList
