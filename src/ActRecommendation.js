import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

export default class ActRecommendation extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/act_recommendations/1')
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
      {this.state.referrals.map((ref, index) =>
        <div key={index}>
        <Card.Group>
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
                <Button basic color='red'>Reject this recommendation</Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        </div>)}
      </div>
    )
  }
}
