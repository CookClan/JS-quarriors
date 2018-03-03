import { TestBed, async } from '@angular/core/testing';
import { QuarriorsComponent } from './Quarriors.component';
describe('QuarriorsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuarriorsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const quarriors = fixture.debugElement.componentInstance;
    expect(quarriors).toBeTruthy();
  }));
  it(`should have as title 'quarriors'`, async(() => {
    const fixture = TestBed.createComponent(QuarriorsComponent);
    const quarriors = fixture.debugElement.componentInstance;
    expect(quarriors.title).toEqual('quarriors');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(QuarriorsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to quarriors!');
  }));
});
