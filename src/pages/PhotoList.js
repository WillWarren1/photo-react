import React, { Component } from 'react'
// import PhotoDetail from './PhotoDetail'
import data from '../data/photoalbum.json'

import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const imageStyle = {
      width: '30rem'
    }

    // const category = data.this.props.match.params.index
    return (
      <>
        <main>
          {data.pandas.photos.map((photo, index) => {
            return (
              <Link key={index} to={'/pandas/' + index}>
                <img
                  style={imageStyle}
                  src={photo.imageURL}
                  alt={photo.title}
                />
              </Link>
            )
          })}
        </main>
      </>
    )
  }
}

export default PhotoList
