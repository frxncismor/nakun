import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  componentes: Observable<Componente[]>;
  constructor( private dataService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();

  }

  onClick() {
    this.router.navigateByUrl('/profile');
  }

}
