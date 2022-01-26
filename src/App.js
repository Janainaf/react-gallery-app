import React from "react";
import apiKey from "./config.js";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const api = apiKey;

export class App extends React.Component {
  state = {
    photos: [],
    name: "moon",
  };

  componentDidMount() {
    window.addEventListener("load", this.handleClick("moon"));
  }

  changeName = (query) => {
    this.setState(
      {
        name: query,
      },
      this.handleClick
    );
  };

  // componentDidMount() {
  //   fetch(
  //     `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${this.state.name}&per_page=15&format=json&nojsoncallback=1&`
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         name: this.state.name,
  //         photos: responseData.photos.photo,
  //       });
  //     });
  // }

  handleClick = async (name) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${this.state.name}&per_page=15&format=json&nojsoncallback=1&`;
    const response = await fetch(url);
    const responseJson = await response.json();
    const photo = await responseJson.photos;
    const photos = await photo.photo;
    this.setState({
      photos: photos,
      name: this.state.name,
    });
  };

  render() {
    return (
      <div>
        <SearchForm onSearch={this.changeName.bind(this)} />
        <Router>
          <Routes>
            <Route exact path="/" element={<NavBar />} />{" "}
            <Route
              exact
              path="/sunsets"
              element={<NavBar changeName={this.changeName.bind(this)} />}
            />
            <Route
              exact
              path="/beaches"
              element={<NavBar changeName={this.changeName.bind(this)} />}
            />
            <Route
              exact
              path="/forests"
              element={<NavBar changeName={this.changeName.bind(this)} />}
            />{" "}
          </Routes>
        </Router>
        {/* {this.state.photos && this.state.name && ( */}
        <Photo photos={this.state.photos} />
      </div>
    );
  }
}
export default App;
