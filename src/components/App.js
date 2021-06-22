import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import apiKey from "../config";

//  App Components
import Search from "./Search";
import Nav from "./Nav";
import PhotoContainer from "./photos/PhotoContainer";
import NotFound from "./NotFound";


const App = () => {
  
  // React Hooks for photos data and loading state
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Axios Flicker Request
  const getPhotos = (searchQuery) => {
    // Set loading State to true while getting photo data from Flicker
    setLoading(true);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        setPhotos(res.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching data: ", error)
      })

  }
  
  
  // Routes and component structure
  return (
    <BrowserRouter>
      <div className="container">
        <Search getPhotos= {getPhotos} />
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route exact path ="/:searchQuery">
            <PhotoContainer
              loading={loading}
              photos={photos}
              getPhotos={getPhotos}
            />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}


export default App;
