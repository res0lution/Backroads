import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

import Tour from "../Tours/Tour"
import styles from "../../css/items.module.css"
import Title from "../Title"

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  console.log(response)

  return (
    <div className={styles.tours}>
      <Title title="Featured" subtitle="tours" />

      <AniLink fade to="/tours" className="btn-primary">
        All tours
      </AniLink>
      <Tour />
    </div>
  )
}

export default FeaturedTours
