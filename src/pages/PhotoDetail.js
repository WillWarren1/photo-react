import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class PhotoDetail extends Component {
  render() {
    return (
      <>
        <figure>
          <img src={this.props.image} alt={this.props.imageTItle} />
          <Link to="/photo_list/:id">
            <h1>{this.props.imageTitle}</h1>
          </Link>
        </figure>
      </>
    )
  }
}

export default PhotoDetail
