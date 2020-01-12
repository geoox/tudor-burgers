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
    <Carousel infiniteLoop autoPlay transitionTime={1000} emulateTouch showStatus={false} showThumbs={false} showIndicators={false}>
        <div>
            <img src="https://imgur.com/8mpzHma.jpg" />
        </div>
        <div>
            <img src="https://imgur.com/9ePMbdK.jpg" />
        </div>
        <div>
            <img src="https://imgur.com/nSXVERI.jpg" />
        </div>
        <div>
            <img src="https://imgur.com/bjjtJYm.jpg" />
        </div>
        <div>
            <img src="https://imgur.com/HKyaw22.jpg" />
        </div>
        <div>
            <img src="https://imgur.com/n9u8A15.jpg" />
        </div>
    </Carousel>

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
