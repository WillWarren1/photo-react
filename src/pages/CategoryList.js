import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/photoalbum.json'
class CategoryList extends Component {
  render() {
    console.log(Object.keys(data))
    const jsonKeys = Object.keys(data)
    const jsonArray = Object.entries(data)
    console.log(jsonArray)

    // const category = data.this.props.match.params.index
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

export default CategoryList
