import React, { Component } from "react"
import { Segment } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './menu.css'
import { Document, Page } from 'react-pdf';
import menu_pdf from '../images/Menu_Tudor.pdf';

export default class MenuPage extends Component{

  state = {
    file: menu_pdf,
    page: [1,2]
  }

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
              <br/>
              <a href={menu_pdf} target="_blank"><b>Click</b> to open the menu in pdf
              <br/><br/><br/>
                <Document
                  file={this.state.file}
                  className="view-pc"
                >
                  {this.state.page.map(page => (
                    <Page pageNumber={page} scale={2.0}/>
                  ))}
                
                </Document>
              </a>
              </Segment>
              
          </div>

        </div>
      </Layout>
    )
  }
}

