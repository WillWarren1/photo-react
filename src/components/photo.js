import React, { Component } from 'react'

class Photo extends Component {
  render() {
    return (
      <>
        <figure>
          <a href={this.props.source}>
            <img
              className={this.props.className}
              src={this.props.picture}
              alt={this.props.title}
            />
          </a>

          <h1>{this.props.title}</h1>
        </figure>
      </>
    )
  }
}

export default Photo
