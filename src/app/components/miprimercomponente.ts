///Importamos la Clase component de la Libreria @Angular/core para la creacion de nuestro componente

import {Component} from '@angular/core';
///El decorador Component establece los parametros que van a ser utilizados a la hora de Exportar e Importar el modulo actual
@Component({
    ///Indentificamos la forma en la que vamos a llamar al Componente mediante una etiqueta HTML
    selector: 'primer-component',

    ///Definimos la estructura de nuestro Componente que va a ser representado en la Vista 
    template: `
        <p>Aprendiendo con Cristian</p>
        <ul>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Angular 2</li>
        </ul>
    `,
    ///Establecemos el estilo de nuestro Componente de manera local
    styles: [`
            *{fontFamily: century gothic, sans-serif;}
            ul{
                color:#ccc;
                background-color:#011;
            }
        `]

})
///Exportamos la Clase para que pueda ser utilizada por cualquier Componente de Nuestra Aplicacion
export class MiPrimerComponente{
}