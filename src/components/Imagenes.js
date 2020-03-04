import React, {Component} from 'react';
import {
    GridListTile,
    GridListTileBar
} from '@material-ui/core'

//Asignamos a los Props los parametros del Array que vamos a utilizar dentro de nuestro componente
const Imagen = (props) =>{
    const {likes,largeImageURL, previewURL,views, tags} = props.imagen;
    return(
        <>
            <img
                src={previewURL}
                alt={tags} 
            />
            <p>
                <span>{views} Vistas</span>
                <span>{likes} Likes</span>
            </p>
            <a 
                href={largeImageURL}
                target="_blank">
                {tags}
            </a> 
        </>
    )
}

export default Imagen;