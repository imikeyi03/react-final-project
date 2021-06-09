import React from 'react'

const Photo = (props) => {
    return (
        <li>
            <img className="photo" src={props.data.url} />
        </li>        
    )
}

export default Photo;
