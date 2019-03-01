import React, { Component } from 'react'
// import PhotoDetail from './PhotoDetail'
import data from '../data/photoalbum.json'

// import { Link } from 'react-router-dom'
import ListPhotos from '../components/listphotos.js'

class PhotoList extends Component {
  state = {
    hobbies: data.pandas.photos
  }
  render() {
    // const category = data.this.props.match.params.index
    return (
      <>
        {/* <Link to=""> */}
        <ListPhotos hobby={this.state.hobbies} />
        {/* </Link> */}
      </>
    )
  }
}

export default PhotoList
