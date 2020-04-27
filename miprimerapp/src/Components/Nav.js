import React, {Component} from'react';

class Nav extends Component{
    render(){
        return(
            <nav>
                <ul className="menu">
                    <li className="active">Inicio</li>
                    <li>Galeria</li>
                    <li>Contacto</li>
                </ul>  
            </nav>
        )
    }
}

export default Nav;


