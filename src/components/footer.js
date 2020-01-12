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
            <Grid.Column width={8}>
                <h3>Tudor Gourmet Burgers</h3>
                <h5>© 2020, Bucharest, Romania</h5>
                <a href="https://www.facebook.com/tudorburgers/" style={{padding: "7px"}}>
                    <Icon name='facebook' size="big" link color="brown"/>
                </a>
                <a href="https://www.instagram.com/tudorburgers/" style={{padding: "7px"}}>
                    <Icon name='instagram' size="big" link color="brown"/>
                </a>
                <a href="https://www.tripadvisor.com/Restaurant_Review-g294458-d11796412-Reviews-Tudor_Gourmet_Burgers-Bucharest.html" style={{padding: "7px"}}>
                    <Icon name='tripadvisor' size="big" link color="brown"/>
                </a>
            </Grid.Column>
            <Grid.Column>
            
            </Grid.Column>
        </Grid>
      </footer>
    )
  }
}

