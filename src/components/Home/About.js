import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Awesome landscape"
            />
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            odio accusantium vitae.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            odio accusantium vitae.
          </p>

          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
