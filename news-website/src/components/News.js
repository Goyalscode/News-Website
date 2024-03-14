import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // items = [
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  constructor(props) {
    super(props);
    console.log("constructor news comp");
    this.state = {
      items: [],
      // loading: true,
      page: 0,
      totalResults : 0
    }
    document.title = this.props.category[0].toUpperCase() + this.props.category.slice(1) + " News";
  }

  // updateNews = async() => {
    
  //   // console.log("Inside Update")
  //   console.log(this.state.page);
  //   let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc61f8bc9c604d2a91beedc131f8bb53&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let items = await fetch(fetchUrl); // returns a promise
  //   let parsedItems = await items.json();
  //   console.log(parsedItems);
  //   this.setState({
  //     items: parsedItems.articles,
  //     loading: false,
  //     totalResults: parsedItems.totalResults 
  //   });
  // }

  fetchMoreData = async() => {
    console.log('url');
    console.log(this.state);
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c4d24aa674f431498215604e2fd39ab&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6c0a449c4b445a8972e0c4288e1ca2f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc61f8bc9c604d2a91beedc131f8bb53&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // console.log("after url");
    let items = await fetch(fetchUrl); // returns a promise
    let parsedItems = await items.json();
    // console.log(parsedItems);
    // console.log(this.state);
    // console.log("will call setstate");
    this.setState({
      items: this.state.items.concat(parsedItems.articles),
      // loading: false,
      page: this.state.page + 1,
      totalResults: parsedItems.totalResults 
    });
  }
  // prevClick = () => {
  //   console.log("Previous");
  //   this.setState({
  //     page: this.state.page - 1
  //   }, this.updateNews);
  //   this.updateNews();
  // }

  // nextClick = ()=> {
  //   console.log(this);
  //   console.log(this.state.page);

  //   if((this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)) {
  //     return;
  //   }

  //   console.log(this.state.page);
  //   this.setState({
  //     page: this.state.page + 1
  //   }, this.updateNews);
    
  //   console.log(this.state.page);
  //   this.updateNews();
  // }

  async componentDidMount() {
    // this.updateNews();
    this.fetchMoreData();
  }

  render() {
    // console.log("inside render");
    // console.log(this.state);
    return (
      <>
        <h1 className="text-center">Top Headlines - {this.props.category[0].toUpperCase() + this.props.category.slice(1)}</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore = {((this.state.page) <= Math.ceil(this.state.totalResults / this.props.pageSize))}
            // hasMore={this.state.items.length < this.state.totalResults}
            loader={<Spinner/>}
        >
          <div className="container my-5">
            <div className="row my-5">
              {!this.state.loading && this.state.items.map((item) => {
                // console.log(item);
                return <div className="col-md-4" key={item.url}>
                  <Newsitem title={item.title} description={item.description} imageUrl={item.urlToImage} url={item.url} author = {item.author} date = {item.publishedAt} source = {item.source.name}/>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.prevClick}>Previous</button>
          <button disabled = {(this.state.page + 1)  > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.nextClick}>Next</button>
        </div> */}
      </>
    )
  }
}

export default News
