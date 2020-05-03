import React from 'react';
import PrivateRoute from './PrivateRoute.js';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
  const [friends, setFriends] = useState([])

  axiosWithAuth()
    .get("http://localhost:5000/api/data")
}

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

    return(
      <h1>Friends</h1>
    )
};

export default Friends;
