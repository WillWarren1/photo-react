import React, { Component } from 'react'

import data from '../data/photoalbum.json'
import Category from '../components/category.js'
// import Category from '../components/category.js'
class CategoryList extends Component {
  state = {
    hobbies: data.pandas.photos
  }

  render() {
    console.log(Object.keys(data))

    const jsonArray = Object.entries(data)
    console.log(jsonArray)

    // const category = data.this.props.match.params.index
    return <Category />
  }
}

export default CategoryList
