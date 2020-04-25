import React from 'react';


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
