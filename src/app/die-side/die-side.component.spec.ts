import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DieSideComponent } from './die-side.component';
import { DieSide } from '../shared/models/die-side';
import { Die } from '../shared/models/die';
import { Icon } from '../shared/models/icon.enum';

describe('DieSideComponent Assistant', () => {
  let component: DieSideComponent;
  let fixture: ComponentFixture<DieSideComponent>;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieSideComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DieSideComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render bursts', async(() => {
    component.side = new DieSide(0, 0, 0, 0, 2);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.burst').textContent).toEqual('**');
  }));
  it('should render level', async(() => {
    component.side = new DieSide(0, 1);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.level').textContent).toEqual('1');
  }));
  it('should render attack', async(() => {
    component.side = new DieSide(0, 0, 1);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.attack').textContent).toEqual('1');
  }));
  it('should render defense', async(() => {
    component.side = new DieSide(0, 0, 0, 4);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.defense').textContent).toEqual('4');
  }));
  it('should have a background of white', async(() => {
    component.side = new DieSide(0);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').style.backgroundColor).toEqual('white');
  }));
  it('should have a text color of black', async(() => {
    component.side = new DieSide(0);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').style.color).toEqual('black');
  }));
  it('should have a background of red', async(() => {
    component.side = new DieSide(0);
    component.side.die = new Die(Array(6).fill(component.side), '', 'red', 'blue');
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').style.backgroundColor).toEqual('red');
  }));
  it('should have a text color of blue', async(() => {
    component.side = new DieSide(0);
    component.side.die = new Die(Array(6).fill(component.side), '', 'red', 'blue');
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').style.color).toEqual('blue');
  }));
});
