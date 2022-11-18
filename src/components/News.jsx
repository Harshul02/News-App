import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hello I am a constructor");
    this.state = {
      loading: false,
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>My News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="MyDescription" imageUrl="" newsUrl="TODO" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="MyDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="MyTitle" description="MyDescription" />
          </div>
        </div>
      </div>
    )
  }
}

export default News