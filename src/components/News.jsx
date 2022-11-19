import React, { Component } from 'react'
import NewsItem from './NewsItem'
import secret from './API.js';

export class News extends Component {
  
  constructor(props){
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      articles: [],
      loading: false
    }
  }

  componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey="+secret;
    // let data = await fetch(url);
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
          articles: json.articles,
          loading: true
      });
      console.log(json.articles);
  });
    // let parsedData = await data.json();
    // console.log(parsedData.articles);
    // this.setState={
    //   articles: parsedData.articles,
    //   // loading: true
    // }
  }

  render() {
    const { loading, articles } = this.state;
    // console.log(articles);
        if (!loading) return <div>
            <h3> Loading please wait.... </h3> </div> ;
    // const {articles,loading} = this.state;
    return (
      <div className="container my-3">
        <h2>My News - Top Headlines</h2>
        <div className="row">
        {articles.map((element)=>{
        return( <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.length >= 45 ? element.title.slice(0, 45) : element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>);
        })}
          
        </div>
      </div>
    )
  }
}

export default News