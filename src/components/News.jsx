import React, { Component } from 'react'
import NewsItem from './NewsItem'
import secret from './API.js';

export class News extends Component {
  
  constructor(props){
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${secret}&page=1&pageSize=20`;
    // let data = await fetch(url);
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
          articles: json.articles,
          loading: true,
          totalResults: json.totalResults
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

  handleNextClick = ()=> {
    // console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults /20))
    {

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${secret}&page=${this.state.page + 1}&pageSize=20`;
    // let data = await fetch(url);
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
          articles: json.articles,
          loading: true,
          page: this.state.page + 1
      })});

    }
    // this.setState = {
    //   page: this.state.page + 1
    // }
  }
  handlePrevClick = ()=> {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${secret}&page=${this.state.page - 1}&pageSize=20`;
    // let data = await fetch(url);
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      this.setState({
          articles: json.articles,
          loading: true,
          page: this.state.page - 1
      })});
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
          let desc = element.description;
          let shortTitle = element.title;
          {/* if(desc && desc.length >60)
          {
            desc=desc.slice(0,60);
          }
          if(shortTitle && shortTitle.length>45)
          {
            shortTitle = shortTitle.slice(0,45);
          } */}
        return( <div className="col-md-4" key={element.url}>
            <NewsItem title={shortTitle} description={desc} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>);
        })}
          
        </div>
        <div className="container d-flex justify-content-between my-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News