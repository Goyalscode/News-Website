import React, { Component } from 'react'
import Newsitem from './Newsitem'

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

  constructor() {
    super();
    console.log("constructor news comp");
    this.state = {
      items: [],
      loading: false,
      page: 1
    }
  }

  prevClick = async() => {
    console.log("Previous");
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc61f8bc9c604d2a91beedc131f8bb53&page=${this.state.page - 1}&pageSize=20`;
    let items = await fetch(fetchUrl); // returns a promise
    let parsedItems = await items.json();
    this.setState({
      page: this.state.page - 1,
      items: parsedItems.articles
    });
  }

  nextClick = async ()=> {
    console.log("Next");
    console.log(this.state.page);
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc61f8bc9c604d2a91beedc131f8bb53&page=${this.state.page + 1}&pageSize=20`;
    console.log("Next");
    let items = await fetch(fetchUrl); // returns a promise
    let parsedItems = await items.json();
    this.setState({
      page: this.state.page + 1,
      items: parsedItems.articles
    });
  }

  async componentDidMount() {
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc61f8bc9c604d2a91beedc131f8bb53&page=1&pageSize=20`;
    let items = await fetch(fetchUrl); // returns a promise
    console.log(items);
    let parsedItems = await items.json();
    console.log(parsedItems);
    this.setState({
      items: parsedItems.articles
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <div className="row my-3">
          {this.state.items.map((item) => {
            // console.log(item);
            return <div className="col-md-4" key={item.url}>
              <Newsitem title={item.title} description={item.description} imageUrl={item.urlToImage} url={item.url} />
            </div>
          })}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.prevClick}>Previous</button>
          <button type="button" className="btn btn-secondary" onClick={this.nextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
