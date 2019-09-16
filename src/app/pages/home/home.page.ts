import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { Article, Profesional } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { NoticiasService, noticia } from '../../services/noticias.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  destacados:  any = [];

  profesionales: Profesional[] = [];

  constructor(private router: Router, private navCtrl: NavController, private dataService: ServiceService
    , public noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarDestacados();
    this.segment.value = 'destacado';
  }

  seleccionSegmento(event) {
    
    console.log(event);

    if (event.detail.value === 'destacado') {
      this.profesionales = [];
      this.cargarDestacados();
    } else {
      this.destacados = [];
      this.cargarProfesionales();
    }

  }

  loadData(event) {
    console.log(event);
    setTimeout(() => {
      if (this.segment.value === 'destacado') {
        if (this.destacados.length) {
          event.target.complete();
          this.infiniteScroll.disabled = true;
          return;
        }
      } else {
        if (this.profesionales.length) {
          event.target.complete();
          this.infiniteScroll.disabled = true;
          return;
        }
      }
    }, 1000);
  }

  doRefresh(event) {
    setTimeout(() => {
      if (this.segment.value === 'destacado') {
        if (this.destacados.length) {
          event.target.complete();
        }
      } else {
        if (this.profesionales.length) {
          event.target.complete();
        }
      }
    }, 1000);
  }

  cargarProfesionales(event?) {
    this.dataService.getProfesionales().subscribe( resp => {
      console.log('profesionales', resp);

      /*if ( resp.profesionals.length === 0) {
        event.target.disabled = true;
        return;
      }
*/
      this.profesionales.push( ...resp.profesionals);

      if (event) {
        event.target.complete();
      }

    });
  }

  cargarDestacados(event?) {
    this.noticiasService.getNoticias().subscribe(noticias => {
      this.destacados = noticias;
    })

     /*if (noticias.articles.length === 0) {
       event.target.disabled = true;
       return;
     }

     this.destacados.push( ...resp.articles);

     if (event) {
       event.target.complete();
     }
   });*/
  }

}
