import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/photoalbum.json'

class PhotoDetail extends Component {
  render() {
    console.log(this.props)
    console.log(Object.keys(data))
    const picture = data.pandas.photos[this.props.match.params.index]
    return (
      <>
        <figure>
          <img src={picture.imageURL} alt={picture.title} />

          <h1>{picture.title}</h1>
        </figure>
      </>
    )
  }
}

export default PhotoDetail
