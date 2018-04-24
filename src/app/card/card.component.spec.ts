import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Type } from '../shared/models/type';
import { Die } from '../shared/models/die';
import { DieSide } from '../shared/models/die-side';
import { Icon } from '../shared/models/icon.enum';
import { DieSideComponent } from '../die-side/die-side.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, DieSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = new Type(new Die([
        new DieSide(Icon.Quiddity1),
        new DieSide(Icon.Quiddity2),
        new DieSide(Icon.Quiddity2, 1),
        new DieSide(Icon.Ready, 0, 1, 2, 5),
        new DieSide(Icon.Ready, 0, 2, 3, 6),
        new DieSide(Icon.Ready, 2, 3, 4, 8),
    ],
    `<g transform="translate(20,20) scale(0.1)">
    <path d="M390.5,0.5
    c6,1.7,11.9,3.6,17.2,7.2
    c14.5,9.8,22.9,23.7,26.8,40.4
    c3.3,14.1,2.4,27.9-3.5,41.3
    c-1,2.3-2.3,4.5-3.6,6.5
    c-0.4,0.6-0.7,1.5-1.6,1.3
    c-0.7-0.1-0.8-1-1.1-1.6
    c-3.3-8.5-6.4-17-9.8-25.4
    c-4.2-10.4-7.4-21.2-12-31.5
    c-3.9-8.6-8.4-16.8-15.1-23.7
    c-5.2-5.3-11.3-9-18.8-10
    c-0.5-0.1-1.3,0.1-1.4-0.7
    c-0.1-0.7,0.7-0.8,1.2-1.1
    c2.8-1.4,5.8-1.9,8.8-2.8
    C381.8,0.5,386.2,0.5,390.5,0.5z"/>
<path d="M58.8,97.8c3-1,5.9-2,8.9-2.9
c30.4-9.7,60.8-19.5,91.2-29.2
c35.9-11.5,71.7-23,107.6-34.4
c20.8-6.7,41.6-13.4,62.3-20
c12.4-4,24-3.1,34.3,5.7
c5.4,4.6,9.4,10.3,12.9,16.4
c4.2,7.4,7.3,15.3,10.3,23.3
c6.3,16.8,12.6,33.5,19,50.2
c13.2,34.4,26.5,68.7,40.7,102.7
c14.2,34.1,29.3,67.8,46,100.7
c7,13.8,14.1,27.6,22,40.9
c5.3,9,11.4,17.4,16.5,26.5
c9,16,16.6,32.5,20.5,50.5
c2.5,11.5,3.3,23.1,0.3,34.7
c-0.8,3.2-2.1,6.3-3.5,9.3
c-2.9,6.4-7.3,10.3-14.4,12.5
c-45.6,14.2-90.4,30.5-134.7,48.5
c-47.9,19.4-94.8,41.1-140.8,64.5
c-0.9,0.4-1.7,1-3.2,1.1
c2.4-2.6,4.6-4.9,6.6-7.2
c13.5-15.3,18-33.3,15-53.2
c-2.3-15.5-8.3-29.7-16.4-42.9
c-8.8-14.4-16.4-29.4-24.2-44.3
c-11.8-22.4-23.2-45-34.3-67.8
c-16.7-34.2-32.4-68.9-46.7-104.2
c-11.4-28.2-21.1-57-29.2-86.4
c-5.8-21.1-12.9-41.7-23.3-61.1
c-4.9-9.2-10.6-17.8-18.6-24.6
c-6.7-5.7-14.3-9.1-23.3-8.6
c-0.4,0-0.8-0.1-1.2-0.1
C58.9,98.2,58.8,98,58.8,97.8z"/>
<path d="M5.5,160.2
c0-14,3.5-26.9,13-37.6
c11.7-13.2,29.3-16.8,45.5-9.5
c12.7,5.8,21.7,15.4,27.8,27.6
c8.1,16,10.3,32.8,5.3,50.2
c-3.4,11.8-9.7,21.7-20.6,27.8
c-14.1,7.9-28.2,6.5-41.5-1.9
c-16.4-10.3-25-25.8-28.7-44.4
c-0.4-2-0.7-4.1-0.9-6.2
C5.4,164.2,5.5,162.2,5.5,160.2z"/>
<path d="M164.8,533.6
c0-11.3,2.5-22,8.8-31.5
c12.5-19.2,34.9-24.4,54.6-12.6
c13.2,7.8,21.7,19.5,26.7,33.8
c5.7,16.2,5.9,32.5-0.8,48.5
c-6.8,16.1-21.6,26.4-38.1,25.8
c-12-0.4-22-5.7-30.5-13.8
C172.2,571,164.8,552.8,164.8,533.6z"/>
<path d="M574.6,454.1
c-0.6-0.8-0.2-1.6-0.1-2.4
c1.7-13.3-0.4-26.2-4.4-38.9
c-6.8-21.6-17.7-41.1-30.2-59.8
c-0.7-1-2.3-2.2-1.5-3.4
c0.8-1.3,2.6-0.5,4-0.4
c16,1.5,27.9,10,36.8,22.7
c12.8,18.4,16.4,38.7,10,60.4
c-2.3,7.9-6.6,14.7-12.6,20.4 C576,453.3,575.6,454.1,574.6,454.1z"/>
    </g>`, 'blue', 'white'),
    'Questing Wizard',
    'Strong', 8, 3,
    ['When {0} scores, you may cull any number of Spell Dice from your Active Pool or Ready Area for 1 Glory each \
(even if they were not attached to {0}).']);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description', async(() => {
    expect(compiled.querySelector('div.description > p:nth-child(1)').textContent)
    .toEqual('When Questing Wizard scores, you may cull any number of \
Spell Dice from your Active Pool or Ready Area for 1 Glory each (even if they were not attached to Questing Wizard).');
  }));
});
