import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Link to="/blog/">Blog page</Link>
  </Layout>
)

export default IndexPage
