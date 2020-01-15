import React, { Component } from "react"
import { Button, Header, Icon, Segment, Menu } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './menu.css'

export default class MenuPage extends Component{

  render(){
    return(
      <Layout>
        <div className="menu-page">
          <SEO title="Menu" />
          <div className="menu-parallax">
            <div className="inner-parallax">
              <p>Menu</p>
            </div>
          </div>
          <div className="menu-page-container">

              <Segment placeholder>
                <Header icon>
                  <Icon circular inverted color='brown' name='file text' />
                  <br/>
                  <p className="menu-text">
                    
                  Cosmopolis - Complex Rezidential Cosmopolis
                    <br/><br/>
                  Ploiesti - Greceanu 4
                  </p>
                </Header>
                
              </Segment>
              
          </div>

        </div>
      </Layout>
    )
  }
}

