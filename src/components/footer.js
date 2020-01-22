import React, { Component } from 'react'
import "./footer.css"
import { Grid, Icon } from 'semantic-ui-react'


export default class Footer extends Component {
  state = {}

  render() {

    return (
      <footer>
          <Grid columns='equal'>
            <Grid.Column>
            
            </Grid.Column>
            <Grid.Column width={10}>
                <h3  style={{marginBottom: "4vh"}}>Follow Tudor Gourmet Burgers on:</h3>
                <a href="https://www.facebook.com/tudorburgers/" style={{padding: "20px"}} className="footer-item">
                    <Icon name='facebook' size="big" link color="brown"/>
                </a>
                <a href="https://www.instagram.com/tudorburgers/" style={{padding: "20px"}} className="footer-item">
                    <Icon name='instagram' size="big" link color="brown"/>
                </a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g294458-d11796412-Reviews-Tudor_Gourmet_Burgers-Bucharest.html" style={{padding: "20px"}} className="footer-item">
                    <Icon name='tripadvisor' size="big" link color="brown"/>
                </a>
                {/* <h5>© 2020, Bucharest, Romania</h5> */}
            </Grid.Column>
            <Grid.Column>
            
            </Grid.Column>
        </Grid>
      </footer>
    )
  }
}

