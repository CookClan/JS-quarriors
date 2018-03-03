import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceSideComponent } from './dice-side.component';

describe('DiceSideComponent', () => {
  let component: DiceSideComponent;
  let fixture: ComponentFixture<DiceSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
