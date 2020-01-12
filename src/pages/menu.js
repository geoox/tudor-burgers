import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './menu.css'

const Menu = () => (
  <Layout>
    <div className="menu-page">
      <SEO title="Menu" />
      <h1>Hi from the menu page</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Menu
