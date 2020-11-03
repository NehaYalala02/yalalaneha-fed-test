import React, { Component } from "react";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  onLoadMoreClick = () => {
    this.componentDidMount();
  };

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>loading</div>;
    } else {
      return (
        <div className="App">
          <div className="card" key={items.results}>
            <p>
              Name: {items.results[0].name.title} {items.results[0].name.first}{" "}
              {items.results[0].name.last}
            </p>
            <p> Gender: {items.results[0].gender} </p>
            <p>Email: {items.results[0].email}</p>
            <p>State: {items.results[0].location.state}</p>
            <p>Country: {items.results[0].location.country}</p>
            <p>Age: {items.results[0].dob.age}years</p>
          </div>
          <button className="loadMore" onClick={this.onLoadMoreClick}>
            Load More Cards
          </button>
        </div>
      );
    }
  }
}
export default App;
