import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './locations.css'

const Locations = () => (
  <Layout>
    <div className="locations">
      <SEO title="Locations" />
      <div className="locations-parallax">
        <div className="inner-parallax">
          <p>Our locations</p>
        </div>
      </div>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1oYG-WHgGlCbGWIQ3TdV9ef97_f5mnbL-"></iframe>
      </div>
    </div>
  </Layout>
)

export default Locations
