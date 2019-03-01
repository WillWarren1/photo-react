import React, { Component } from 'react'
import data from '../data/photoalbum.json'
import ListPhotos from './listphotos'

class Category extends Component {
  render() {
    return <ListPhotos hobby={data.miniatures.photos} />
  }
}

export default Category
