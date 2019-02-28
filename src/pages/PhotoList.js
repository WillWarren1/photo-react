import React, { Component } from 'react'
import PhotoDetail from './PhotoDetail'
import data from '../data/photoalbum.json'

class PhotoList extends Component {
  render() {
    return (
      <>
        <main>
          {data.pandas.photos.map((photo, x) => {
            return (
              <PhotoDetail
                key={x}
                imageTitle={photo.title}
                image={photo.imageURL}
              />
            )
          })}
        </main>
      </>
    )
  }
}

export default PhotoList
