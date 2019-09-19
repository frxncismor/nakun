import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoPlaneComponent } from '../../components/nuevo-plane/nuevo-plane.component';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.page.html',
  styleUrls: ['./plane.page.scss'],
})
export class PlanePage implements OnInit {
  US: any = [];
  userId: any;
  ocultar = '';
  planes: any = [];

  slides: { desc: string }[] = [
    {
      desc: ''
    }
  ];

  constructor( private modalCtrl: ModalController,
               private fb: FirebaseApp,
               private auth: AuthService,
               private planeService: PlaneService) { }

  ngOnInit() {
    this.CurrentUser();

    this.planeService.getPlane().subscribe( resp => {
      console.log(resp);
      this.planes = resp;
    });
  }

  async nuevoPlane() {
    const modal = await this.modalCtrl.create({
    component: NuevoPlaneComponent,
    componentProps: { value: 123 },
    cssClass: 'newPlane'
    });

    await modal.present();

  }

  CurrentUser() {
    this.fb.auth().onAuthStateChanged( user => {
      if (user) {
        this.userId = user.uid;
        console.log('bien');
        this.traerInformacion();
      }
    });
  }

  traerInformacion() {
    this.auth.getUserInfo(this.userId).subscribe(US => {
      console.log(US);
      this.US = US;
    });
  }



}
