import React, { Component } from 'react'
// import PhotoDetail from './PhotoDetail'
import data from '../data/photoalbum.json'

// import { Link } from 'react-router-dom'
import ListPhotos from '../components/listphotos.js'

class PhotoList extends Component {
  state = {
    // hobbies: ,
    choiceHobby: data.pandas.photos
  }
  render() {
    // const category = data.this.props.match.params.index
    // console.log(category)
    return (
      <>
        {/* <Link to=""> */}
        <ListPhotos hobby={this.state.choiceHobby} />
        {/* </Link> */}
      </>
    )
  }
}

export default PhotoList
