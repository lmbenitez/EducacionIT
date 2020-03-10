import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})

export class MostrarComponent{
  //Variables para la Manipulacion
    texto:boolean = true;
    imagen:boolean = false;
  
  //Contenido de Mi DIV
    imagenURL:string = "../../assets/media/gatito-observando.jpg"
    
    contenido:string = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi aliquam dignissimos deserunt, eligendi dolor consequuntur modi voluptate accusantium. Voluptate tenetur sapiente quidem atque reprehenderit officia dicta consequatur veritatis provident."

  valorBoton:boolean = this.imagen
  cambiarBoolean(){
    this.imagen = !this.imagen
  }
  cambiarTexto(){
    this.texto = !this.texto
  }

  enviarButton(e){
    console.log(e)
  }
}
