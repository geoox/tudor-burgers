import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'semantic-ui-css/semantic.min.css'
import { Carousel } from 'react-responsive-carousel';
import "./index.css"
import { Button, Header, Icon, Segment, Menu } from 'semantic-ui-react'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="carousel-container">
      <Carousel infiniteLoop autoPlay transitionTime={1000} emulateTouch showStatus={false} showThumbs={false} showIndicators={false}>
          <div className="carousel-img">
              <img src="https://imgur.com/c6ULYsQ.jpg" />
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/hnnb2Xx.png"/>
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/wCPniPt.png"/>
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/90fWbp1.png" />
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/wa52Dfy.png" />
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/o9j6OXj.png" />
          </div>
          <div className="carousel-img">
              <img src="https://i.imgur.com/O6bW5rJ.png" />
          </div>
      </Carousel>
    </div>

    <div>

      <Segment placeholder>
        <Header icon>
          <p>
          Some text
          </p>
        </Header>
      </Segment>

      </div>
  </Layout>
)

export default IndexPage
