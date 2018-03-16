import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public card: Type;
  constructor() { }

  ngOnInit() {
  }

}
