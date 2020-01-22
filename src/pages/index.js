import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'semantic-ui-css/semantic.min.css'
import { Carousel } from 'react-responsive-carousel';
import "./index.css"
import { Icon, Segment } from 'semantic-ui-react'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="carousel-container">
      <Carousel infiniteLoop autoPlay transitionTime={1000} emulateTouch showStatus={false} showThumbs={false} showIndicators={false}>
        <div className="carousel-img">
          <img src="https://i.imgur.com/hnnb2Xx.png" />
        </div>
        <div className="carousel-img">
          <img src="https://i.imgur.com/wCPniPt.png" />
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
        <div className="carousel-img">
          <img src="https://imgur.com/c6ULYsQ.jpg" />
        </div>
      </Carousel>
    </div>

    <div>

      <div className="home-plus">
        <div className="main-item">
          <a href="/about-us">
            <Icon circular inverted color='brown' name='food' /> About us
          </a>
        </div>
        <div className="main-item">
          <a href="/menu">
            <Icon circular inverted color='brown' name='book' /> Menu
        </a>
        </div>
        <div className="main-item">
          <a href="/locations">
            <Icon circular inverted color='brown' name='road' /> Locations
        </a>
        </div>
        <div className="main-item" style={{paddingBottom: 0}}>
          <a href="/contact">
            <Icon circular inverted color='brown' name='vcard' /> Contact
        </a>
        </div>
      </div>

    </div>

  </Layout>
)

export default IndexPage
