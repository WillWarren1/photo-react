import React, { Component } from 'react'
import Photo from './photo'

import { Link } from 'react-router-dom'
class ListPhotos extends Component {
  render() {
    // const ugh = data[this.props.match.params.category]
    console.log(this.props)
    return (
      <>
        <main>
          <section>
            {this.props.hobby.photos.map((photo, index) => {
              return (
                <Link key={index} to={`/${this.props.hobbyKey}/${index}`}>
                  <Photo
                    className="thumbnail"
                    picture={photo.imageURL}
                    title={photo.title}
                    source={photo.sourceURL}
                  />
                </Link>
              )
            })}
          </section>
        </main>
      </>
    )
  }
}

export default ListPhotos
