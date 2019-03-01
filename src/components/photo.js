import React, { Component } from 'react'

class Photo extends Component {
  render() {
    return (
      <>
        <figure>
          <img src={this.props.picture} alt={this.props.title} />

          <h1>{this.props.title}</h1>
        </figure>
      </>
    )
  }
}

export default Photo
