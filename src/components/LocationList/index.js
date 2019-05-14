import React, { Component } from 'react';
class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }
  render() {
    return (
      <div>
        <p>locations</p>
      </div>
    );
  }
}

export default LocationList;
