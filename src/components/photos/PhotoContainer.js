import React from 'react'
import Photo from './Photo';


const PhotoContainer = (props) => {
    
    let photos = props.data.map((photo) => {
        return <Photo img={photo.img_src} />
    })
    
    return (
        <div class="photo-container">
            <h2>Images</h2>
            <ul>
                {photos}
            </ul>
        </div>   
    )
}

export default PhotoContainer;
