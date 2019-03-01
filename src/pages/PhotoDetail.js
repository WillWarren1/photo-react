import React, { Component } from 'react'

import data from '../data/photoalbum.json'
import Photo from '../components/photo.js'

class PhotoDetail extends Component {
  render() {
    const picture = data[this.props.match.params.category]
    return (
      <Photo
        picture={picture.photos[this.props.match.params.index].imageURL}
        title={picture.photos[this.props.match.params.index].title}
      />
    )
  }
}

export default PhotoDetail
