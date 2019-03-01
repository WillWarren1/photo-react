import React, { Component } from 'react'

import data from '../data/photoalbum.json'
import Photo from '../components/photo.js'

class PhotoDetail extends Component {
  render() {
    const category = Object.keys(data)
    const picture = data.pandas.photos[this.props.match.params.index]
    console.log(category)
    return (
      // {console.log(this.props)}
      // {console.log(Object.keys(data))}
      <Photo picture={picture.imageURL} title={picture.title} />
    )
  }
}

export default PhotoDetail
