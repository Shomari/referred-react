import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

export default class Recommendation extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/biz_recommendations/1')
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
          <div key={index}>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src={ref.user_image} />
                <Card.Header>
                  {ref.user_name}
                </Card.Header>
                <Card.Meta>
                  Your Customer
                </Card.Meta>
                <Card.Description>
                  {ref.text}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>Approve</Button>
                  <Button basic color='red'>I Don't know this person</Button>
                </div>
              </Card.Content>
            </Card>
          </div>)}
        </Card.Group>
      </div>
    )
  }
}
