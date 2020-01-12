import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'semantic-ui-css/semantic.min.css'
import { Carousel } from 'react-responsive-carousel';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel infiniteLoop autoPlay transitionTime={1000} emulateTouch showStatus={false} showThumbs={false} showIndicators={false}>
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
        </div>
        <div>
            <img src="https://www.pythoncircle.com/media/uploads/desktop-wallpaper-change-python-20190823-d0843f2cd287490f8e1eeaa712e0f689.jpeg" />
        </div>
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
        </div>
    </Carousel>
  </Layout>
)

export default IndexPage
