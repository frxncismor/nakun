import { Component, OnInit, Input } from '@angular/core';
import { Profesional } from '../../interfaces/interfaces';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.scss'],
})
export class ProfesionalComponent implements OnInit {

  @Input() profesional: Profesional;
  constructor() { }

  ngOnInit() {}

}
