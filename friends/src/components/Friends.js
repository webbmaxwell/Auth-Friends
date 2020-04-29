import React from 'react';
import PrivateRoute from './PrivateRoute.js';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get("/data")
    .then(res => {
      console.log(res)
      this.setState({
        })
      })
    .catch(err => console.error(err)
  )};

  render() {
    return(
      <h1>Friends</h1>
    )
  }
};

export default Friends;
