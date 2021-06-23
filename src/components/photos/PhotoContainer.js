import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

import Photo from './Photo';
import NotFound from "../NotFound";


// Destructured props
const PhotoContainer = ({getPhotos, photos, loading}) => {
    
    let searchQuery = useParams().searchQuery;
    
    // Set useEffect with searchQuery and getPhotos dependencies
    useEffect(() => {
        getPhotos(searchQuery)

    }, [searchQuery, getPhotos]);

    // Map over photos pulled from Flicker leveraging the photo component
    let photoComponent = photos.map(photo => (
        <Photo
            key={photo.id} 
            server={photo.server}
            id={photo.id}
            secret={photo.secret}    
        />
    ))

     // If no photos on search, displays NotFound photoComponent
     const render = () => {
        if (photos.length) {
            return <ul>{photoComponent}</ul>
        } else {
            return <NotFound />
        }
    }
   
    // Shows "Loading..." while data is being fetched
    return (
        <div className="photo-container">
            <h2>Results</h2>
            {
                (loading) ? <h1>Loading...</h1> : render()
            }
        </div>
    );
};

export default PhotoContainer;
