import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { NuevoPostComponent } from '../../components/nuevo-post/nuevo-post.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor( private menuCtrl: MenuController,
               private dataService: ServiceService, 
               private modalCtrl: ModalController,
               private toastController: ToastController) { }


  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  destacados: Article[] = [];

  cards: {autor: string, titulo: string, contenido: string, icono: string, color: string, categoria: string} [] = [
   {
    autor: 'Francisco',
    titulo: 'Violencia en el trabajo',
    contenido: 'En el trabajo se sufre de violencia',
    icono: 'flask',
    color: 'tertiary',
    categoria: 'Trabajo'
   },
   {
    autor: 'Angela',
    titulo: 'Violencia en la familia',
    contenido: 'En la familia se sufre de violencia',
    icono: 'contacts',
    color: 'primary',
    categoria: 'Trabajo'
   }
  ];

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

  borrar(card) {
    console.log('borrar');
    const index = this.cards.indexOf(card);
    console.log(card);

    if (index > -1) {
      this.cards.splice(index, 1);
      this.presentToast();
    }
  }

  
  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Se ha eliminado una entrada',
      showCloseButton: true
    }).then( toast => {
      toast.present();
    });
    
  }

}
