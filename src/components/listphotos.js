import React, { Component } from 'react'
import Photo from './photo'
import data from '../data/photoalbum.json'
import { Link } from 'react-router-dom'
class ListPhotos extends Component {
  render() {
    return (
      <>
        <main>
          {data.miniatures.photos.map((photo, index) => {
            return (
              <Link key={index} to={'/pandas/' + index}>
                <Photo
                  className="thumbnail"
                  picture={photo.imageURL}
                  title={photo.title}
                />
              </Link>
            )
          })}
        </main>
      </>
    )
  }
}

export default ListPhotos
