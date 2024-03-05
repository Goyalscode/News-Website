import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url, author, date, source} = this.props;   
    return (
      <div>
        {/* This is news item */}
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex : '1', left: '90% !important'}}>
          {source}
        </span>
          <img src={imageUrl?imageUrl : "https://www.hindustantimes.com/ht-img/img/2024/02/09/550x309/dark_chocolate_thumb_1707457333455_1707457343656.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}....</p>
              <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={url} target = "_blank" className="btn btn-sm btn-secondary">Open This</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
