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
              <>
                <Link key={index} to={'/photo_list/' + index}>
                  <h2>{category}</h2>
                </Link>
              </>
            )
          })}
        </main>
      </>
    )
  }
}

export default Category
