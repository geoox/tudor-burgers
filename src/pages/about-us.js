import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './about-us.css'

const AboutUs = () => (
  <Layout>
    <div className="about-us">
      <SEO title="About us" />
      <h1>Hi from the about us page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutUs
