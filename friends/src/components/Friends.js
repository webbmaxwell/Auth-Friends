import React from 'react';
import PrivateRoute from './PrivateRoute.js';


class Friends extends React.Component {
  state = {
    Friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {};

}

export default Friends;
