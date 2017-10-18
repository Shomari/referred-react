import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Recommendation from './Recommendation'
import Referral from './Referral'
import ActRecommendation from './ActRecommendation'
import logo from './logo.svg';
import './App.css';
import { Grid, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Router>
        <Container class='app'>
          <Navbar />
          <Grid>
            <Sidebar />
              <Switch>
                <Route exact path="/" component={Recommendation}/>
                <Route exact path="/recommendations" component={Recommendation}/>
                <Route exact path="/active_recommendations" component={ActRecommendation}/>
                <Route exact path="/referrals" component={Referral}/>
              </Switch>
          </Grid>
        </Container>
    </Router>
    );
  }
}

export default App;
