import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CategoryList extends Component {
  render() {
    return (
      <>
        <Link to="/photo_list">
          <h2>Pandas</h2>
        </Link>
        <h2>Miniatures</h2>
      </>
    )
  }
}

export default CategoryList
