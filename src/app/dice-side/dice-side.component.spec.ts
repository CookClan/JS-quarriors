import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSideComponent } from './dice-side.component';

describe('DiceSideComponent', () => {
  let component: DiceSideComponent;
  let fixture: ComponentFixture<DiceSideComponent>;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceSideComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render bursts', async(() => {
    expect(compiled.querySelector('div.burst').textContent).toEqual('**');
  }));
  it('should render level', async(() => {
    expect(compiled.querySelector('div.level').textContent).toEqual('1');
  }));
  it('should render attack', async(() => {
    expect(compiled.querySelector('div.attack').textContent).toEqual('1');
  }));
  it('should render defense', async(() => {
    expect(compiled.querySelector('div.defense').textContent).toEqual('4');
  }));
  it('should have a background of red', async(() => {
    expect(compiled.querySelector('div').style.backgroundColor).toEqual('red');
  }));
  it('should have a text color of blue', async(() => {
    expect(compiled.querySelector('div').style.color).toEqual('blue');
  }));
});
