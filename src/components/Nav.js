import React, { Component } from 'react';
var Links = [
    {   
        id:0,
        direccion:'https://facebook.com',
        clase:'fa fa-facebook',
        nombre:'Facebook'
    },
    {   
        id:1,
        direccion:'https://instagram.com',
        clase:'fa fa-instagram',
        nombre: 'Instagram'
    }, 
    {   
        id:2,
        direccion:'https://whatsapp.com',
        clase:'fa fa-whatsapp',
        nombre: 'Whatsapp'
    },
    {   
        id:3,
        direccion:'https://youtube.com',
        clase:'fa fa-youtube',
        nombre: 'YouTube'
    },
    {   
        id:4,
        direccion:'https://linkedin.com',
        clase:'fa fa-linkedin',
        nombre: 'LinkedIn'
    }
]

class Nav extends Component{
    render(){ 
     // Renderiza el Componente 
     return(
     <ul className="menu">
         {this.props.nombre}
        {   Links.map((link) => (
                <li key={link.id}>
                    <a  href={link.direccion}
                        className={link.clase} >
                        {link.nombre}
                    </a>
                </li> )
        )}
     </ul>   
     );
   }
 }

 export default Nav;