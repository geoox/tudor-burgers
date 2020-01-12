import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './locations.css'

const Locations = () => (
  <Layout>
    <div className="locations">
      <SEO title="Locations" />
      <h1>Hi from the locations page</h1>
    </div>
  </Layout>
)

export default Locations
