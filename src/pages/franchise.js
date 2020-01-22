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
                  <Icon circular inverted color='brown' name='vcard' />
                  <p className="franchise-text">
                    Open your own Tudor Gourmet Burgers. Natural, homemade, you have the chance to share our Tudor Artisanal sauces or buy from fabricadesosuri.ro
                    <br/><br/>
                    {/* Deschideti propriul local Tudor Gourmet Burgers. Totul creat natural, artizanal, distribuie sosurile Tudor Artisanal sau cumpara-le direct de pe pagina fabricadesosuri.ro */}
                  </p>
                </Header>
                <Button content='Contact us' icon='phone' href="/contact" color="brown"></Button>
              </Segment>
              
          </div>

        </div>
      </Layout>
    )
  }
}

