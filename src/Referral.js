import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

export default class Referral extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/referrals/1')
      .then(data => data.json())
      .then(data => {
        this.setState({
          referrals: data
        })
      })
  }

  render() {
    if(!this.state.referrals) return <p>nah</p>
    return (
      <div>
        <Card.Group>
          {this.state.referrals.map((ref, index) =>
            <div key={index} class="ui grid page">
              <Card class='two wide column'>
                hi
              </Card>
              <Card>
                bi
              </Card>
            </div> )}
          </Card.Group>

      </div>

    )
  }
}
