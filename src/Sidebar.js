import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import Recommendation from './Recommendation'
import ActRecommendation from './ActRecommendation'
import Referral from './Referral'

// import { Recommendation } from './Recommendation'

export default class Sidebar extends Component {
   state = { activeItem: 'inbox' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
        <div>
          <Menu vertical>
            <Menu.Item as={Link} to='/recommendations' name='rec' active={activeItem === 'rec'} onClick={this.handleItemClick}>
              View Pending Recommendations
            </Menu.Item>
            <Menu.Item as={Link} to='/active_recommendations' name='act_rec' active={activeItem === 'act_rec'} onClick={this.handleItemClick}>
              View Active Recommendations
            </Menu.Item>
            <Menu.Item as={Link} to='/referrals' name='ref' active={activeItem === 'ref'} onClick={this.handleItemClick}>
              View Referrals
            </Menu.Item>
          </Menu>
          </div>
    );
  }
}
