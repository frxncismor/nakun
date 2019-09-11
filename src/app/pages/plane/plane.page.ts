import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.page.html',
  styleUrls: ['./plane.page.scss'],
})
export class PlanePage implements OnInit {

  ocultar = '';

  slides: { img: string, desc: string }[] = [
    {
      img: '/assets/user-6.svg',
      desc: 'En la vida hay tacos'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'En la vida hay morritas góticas asfdfadgdagadgfdgadf'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
