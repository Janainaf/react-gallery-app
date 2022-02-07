import apiKey from "../config.js";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PhotoContainer from "./PhotoContainer.js";

const api = apiKey;

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("galaxy");
  const [isLoading, setIsLoading] = useState(true);
  const [sunsets, setSunsets] = useState([]);
  const [beaches, setBeaches] = useState([]);
  const [forests, setForests] = useState([]);

  const changeName = (value) => setQuery(value);

  useEffect(() => {
    axios(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&per_page=15&format=json&nojsoncallback=1&`
    )
      .then((response) => setData(response.data.photos.photo))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, [query]);

  useEffect(() => {
    axios(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=sunsets&per_page=15&format=json&nojsoncallback=1&`
    )
      .then((response) => setSunsets(response.data.photos.photo))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    axios(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=beaches&per_page=15&format=json&nojsoncallback=1&`
    )
      .then((response) => setBeaches(response.data.photos.photo))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    axios(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=forests&per_page=15&format=json&nojsoncallback=1&`
    )
      .then((response) => setForests(response.data.photos.photo))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <SearchForm onSearch={changeName} />
      <NavBar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<PhotoContainer photos={data} />} />
          <Route path="/:tag" element={<PhotoContainer photos={data} />} />
          <Route
            path="/sunsets"
            element={<PhotoContainer photos={sunsets} />}
          />
          <Route
            path="/beaches"
            element={<PhotoContainer photos={beaches} />}
          />
          <Route
            path="/forests"
            element={<PhotoContainer photos={forests} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
