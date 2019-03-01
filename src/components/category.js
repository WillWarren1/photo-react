import React, { Component } from 'react'
import data from '../data/photoalbum.json'

import { Link } from 'react-router-dom'
class Category extends Component {
  render() {
    const jsonKeys = Object.keys(data)
    return (
      <>
        <main>
          {jsonKeys.map((category, index) => {
            return (
              <section key={index}>
                <Link to={`/${category}`}>
                  <h2>{data[category].title}</h2>
                  <img
                    className="thumbnail"
                    src={data[category].photos[0].imageURL}
                    alt={data[category].photos[0].imageTitle}
                  />
                </Link>
                <p>{data[category].description}</p>
              </section>
            )
          })}
        </main>
      </>
    )
  }
}

export default Category
