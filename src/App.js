import React from "react";
import { useState, useEffect, useCallback } from "react";
import apiKey from "./config.js";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar";
// import NotFound from "./NotFound";
// import { Router } from "react-router-dom";

const api = apiKey;
const name = "cats";

function App() {
  const [data, dataSet] = useState();

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${name}&per_page=15&format=json&nojsoncallback=1&`
    );
    response = await response.json();
    dataSet(response);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  const photos = data && data.photos.photo;
  console.log(photos);

  return (
    <div>
      <div>
        <SearchForm onClick={fetchMyAPI} />
        <NavBar name="" />
        <Photo photos={photos} />
      </div>
    </div>
  );
}

export default App;
