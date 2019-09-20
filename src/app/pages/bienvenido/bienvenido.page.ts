import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/compartir-contenido.svg',
      titulo: 'Comparte tu historia',
      desc: 'Mira y comparte tus historias de superación con el mundo'
    },
    {
      img: '/assets/slides/psicologo.svg',
      titulo: 'Conecta con profesionales',
      desc: 'Ponemos a tu alcance a profesionales de la salud mental'
    },
    {
      img: '/assets/slides/amor.svg',
      titulo: 'Recibe comentarios motivacionales',
      desc: 'Motiva a los demas con tus comentarios'
    },
    {
      img: '/assets/slides/amistad.svg',
      titulo: 'Crea comunidades',
      desc: 'Promueve la salud mental'
    }
  ];

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onComenzar(){
    this.router.navigate(['/test']);
  }


}
