import React, {Component} from 'react';

//Asignamos a los Props los parametros del Array que vamos a utilizar dentro de nuestro componente
const Imagen = (props) =>{
    const {likes,largeImageURL, previewURL,views, tags} = props.imagen;
    return(
        <div className="card"
            style={{
                backgroundColor:"#192168",
                minWidth:"300px",
                maxWidth:"500px"
            }}>
            <img
                className="w-100"
                src={previewURL}
                alt={tags} 
            />
            <p>
                <span className="badge bg-warning">{views} Vistas</span>
                <span className="badge bg-success">{likes} Likes</span>
            </p>
            <a 
                href={largeImageURL}
                target="_blank">
                {tags}
            </a>
        </div>     
    )
}

export default Imagen;