import React, { Component } from "react"
import { Button, Header, Icon, Segment, Menu } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './feed.css'

export default class Franchise extends Component{

  render(){
    return(
      <Layout>
        <div className="feed">
          <SEO title="Feed" />
          <div className="feed-container">

            <iframe src="https://cdn.lightwidget.com/widgets/dc22107cc9d951b98be03a01bec0dd0f.html" scrolling="no" allowtransparency="true" className="lightwidget">
            </iframe>
              
          </div>

        </div>
      </Layout>
    )
  }
}

