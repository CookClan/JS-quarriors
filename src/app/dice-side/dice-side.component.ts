import { Component, OnInit } from '@angular/core';
import { DiceSide } from '../shared/models/dice-side';
import { Icon } from '../shared/models/icon.enum';
import { DomSanitizer } from '@angular/platform-browser';
import { Class } from '../shared/models/class';

@Component({
  selector: 'app-dice-side',
  templateUrl: './dice-side.component.html',
  styleUrls: ['./dice-side.component.css']
})
export class DiceSideComponent implements OnInit {
private side: DiceSide = new DiceSide();
constructor(private sanitizer: DomSanitizer) {
    this.side.attack = 1;
    this.side.burst = 2;
    this.side.defense = 4;
    this.side.icon = Icon.Ready;
    this.side.level = 1;
    this.side.class = new Class([this.side, null, null, null, null, null], 'Test', '<g transform="translate(25,25) scale(2)"> \
    <path d="M5.5,12h13c0.21,0,0.397-0.131,0.47-0.329s0.013-0.418-0.147-0.554c-1.045-0.881-2.691-1.498-4.289-1.831    \
    C16.002,8.415,17,6.829,17,5c0-2.757-2.243-5-5-5S7,2.243,7,5c0,1.829,0.998,3.415,2.467,4.287    \
    c-1.598,0.333-3.245,0.95-4.289,1.831c-0.16,0.135-0.22,0.356-0.147,0.554S5.29,12,5.5,12z M5.018,19.051l0.175-0.022    \
    C5.294,19.015,5.396,19,5.5,19h13c0.104,0,0.206,0.015,0.308,0.029l0.175,0.022c0.019,0.002,0.037,0.003,0.055,0.003h0.011    \
    c0.295,0.023,0.509-0.221,0.509-0.5c0-0.144-0.06-0.273-0.156-0.364c-0.373-0.572-0.956-0.965-1.611-1.116    \
    c-1.175-1.221-1.576-2.839-1.713-4.074H7.924c-0.137,1.236-0.538,2.857-1.716,4.078c-0.695,0.162-1.31,0.594-1.677,1.225    \
    c-0.095,0.163-0.09,0.366,0.014,0.524C4.646,18.985,4.82,19.072,5.018,19.051z M18.5,20h-13C3.57,20,2,21.57,2,23.5    \
    C2,23.776,2.224,24,2.5,24h19c0.276,0,0.5-0.224,0.5-0.5C22,21.57,20.43,20,18.5,20z"/> \
</g>', 'red', 'blue');
  }
  get background() {
    let svg: string;
    if (this.side.icon === Icon.Ready) {
      svg = this.side.class.readyIcon;
    } else {
      svg = 'HI?';
    }
    return this.sanitizer.bypassSecurityTrustHtml(`<svg style="fill: currentColor;" viewBox="0 0 100 100"> \
      ${svg}\
      </svg>`);
  }
  ngOnInit() {
  }

}
