import React, { Component } from 'react'

import data from '../data/photoalbum.json'
import Photo from '../components/photo.js'

class PhotoDetail extends Component {
  state = {}
  render() {
    const picture = data.miniatures.photos[this.props.match.params.index]

    return (
      // {console.log(this.props)}
      // {console.log(Object.keys(data))}
      <Photo picture={picture.imageURL} title={picture.title} />
    )
  }
}

export default PhotoDetail
