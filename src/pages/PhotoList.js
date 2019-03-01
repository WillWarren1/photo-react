import React, { Component } from 'react'
// import PhotoDetail from './PhotoDetail'
import data from '../data/photoalbum.json'

// import { Link } from 'react-router-dom'
import ListPhotos from '../components/listphotos.js'

class PhotoList extends Component {
  render() {
    const category = data.this.props.match.params.index
    return (
      <>
        {/* <Link to=""> */}
        <ListPhotos />
        {/* </Link> */}
      </>
    )
  }
}

export default PhotoList
