import React, { Component } from "react"
import { Button, Header, Icon, Segment, Menu } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './franchise.css'

export default class Franchise extends Component{

  render(){
    return(
      <Layout>
        <div className="franchise">
          <SEO title="Franchise" />
          <div className="franchise-parallax">
            <div className="inner-parallax">
              <p>Franchise</p>
            </div>
          </div>
          <div className="franchise-container">

              <Segment placeholder>
                <Header icon>
                  <Icon circular inverted color='brown' name='food' />
                  <p className="about-us-text">
                  Tudor Gourmet Burgers is a creation of taste and flavours gathered from 5 continents, of home made artisanal sauces and mixed spices, a mix of 100% natural ingredients perfectly balanced to offer you a unique burger experience. 
      We thank you for being here and of course… BON APPETIT!
                  </p>
                </Header>
                <Button content='See our offerings' icon='file alternate' href="/menu" color="brown"></Button>
              </Segment>
              
          </div>

        </div>
      </Layout>
    )
  }
}

