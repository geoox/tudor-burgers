import React, { Component } from "react"
import { Segment } from 'semantic-ui-react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import './menu.css'
import { Document, Page } from 'react-pdf';
import menu_pdf from '../images/Menu_Tudor.pdf';
import menu_tm_pdf from '../images/Menu_Tm.pdf';

export default class MenuPage extends Component{

  state = {
    file_buc: menu_pdf,
    page_buc: [1,2],
    file_tm: menu_tm_pdf,
    page_tm: [1,2]
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
                <a href={menu_tm_pdf} target="_blank"><b>Timisoara</b> menu.
                <br/><br/><br/>
                <Document
                  file={this.state.file_tm}
                  className="view-pc"
                >
                  {this.state.page_tm.map(page => (
                    <Page pageNumber={page} scale={2.0}/>
                  ))}
                
                </Document>
                </a>
              </Segment>

              <Segment placeholder>
              <br/>
              <a href={menu_pdf} target="_blank"><b>Bucharest</b> menu.
              <br/><br/><br/>
                <Document
                  file={this.state.file_buc}
                  className="view-pc"
                >
                  {this.state.page_buc.map(page => (
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

