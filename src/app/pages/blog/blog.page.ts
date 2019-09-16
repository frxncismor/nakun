import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { NuevoPostComponent } from '../../components/nuevo-post/nuevo-post.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor( private menuCtrl: MenuController, private dataService: ServiceService, private modalCtrl: ModalController) { }


  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  destacados: Article[] = [];
  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.cargarDestacados();
  }

  cargarDestacados(event?) {
    this.dataService.getNoticias().subscribe( resp => {
      console.log('destacados', resp);

      if (resp.articles.length === 0) {
        event.target.disabled = true;
        return;
      }

      this.destacados.push( ...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
   }

   doRefresh(event) {
    setTimeout(() => {

      if (this.destacados.length) {
        event.target.complete();
      }

    },  1000 );
  }

  loadData(event) {
    setTimeout(() => {

        if (this.destacados.length) {
          event.target.complete();
          this.infiniteScroll.disabled = true;
          return;
        }

    }, 1000);
  }

  async nuevoPost() {
    const modal = await this.modalCtrl.create({
      component: NuevoPostComponent,
      componentProps: {
        // titulo: 'Nombre',
        // cambio: this.usuario.nombre
      }
      // cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

}
