import { Component } from '@angular/core';
import { DieSide } from '../app/shared/models/die-side';
@Component({
  selector: 'app-root',
  templateUrl: './quarriors.component.html',
  styleUrls: ['./quarriors.component.css']
})
export class QuarriorsComponent{
  title = 'quarriors';
  side = new DieSide(1,2,1,2,2);
}
