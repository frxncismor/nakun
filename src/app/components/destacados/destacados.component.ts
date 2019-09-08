import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss'],
})
export class DestacadosComponent implements OnInit {

  @Input() destacados: Article[] = [];
  constructor() { }

  ngOnInit() {}

}
