import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let  {title,desc,ImageUrl,newsUrl,author,publishedAt} =this.props
    return (
      
      <div>
        <div  className="card" >
          <img src={ImageUrl} className="card-img-top" alt="..."/>
            <div  className="card-body">
              <h5  className="card-title">{title}</h5>
              <p  className="card-text">{desc}</p>
              <p class="card-text"><small class="text-body-secondary">{!author?'Unknow':author}</small></p>
              <p class="card-text"><small class="text-body-secondary">{new Date(publishedAt).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' className="btn btn-success">ReadMOre</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
