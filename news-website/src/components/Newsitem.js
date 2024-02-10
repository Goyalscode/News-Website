import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;   
    return (
      <div>
        {/* This is news item */}
        <div className="card my-4" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl : "https://www.hindustantimes.com/ht-img/img/2024/02/09/550x309/dark_chocolate_thumb_1707457333455_1707457343656.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}....</p>
              <a href={url} target = "_blank" className="btn btn-sm btn-secondary">Open This</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
