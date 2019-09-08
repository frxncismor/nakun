import { Component, OnInit, Input } from '@angular/core';
import { Profesional } from '../../interfaces/interfaces';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.scss'],
})
export class ProfesionalesComponent implements OnInit {

  @Input() profesionales: Profesional[] = [];
  constructor() { }

  ngOnInit() {}

}
