import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurenceCarListComponent } from './endurence-car-list.component';

describe('EndurenceCarListComponent', () => {
  let component: EndurenceCarListComponent;
  let fixture: ComponentFixture<EndurenceCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndurenceCarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndurenceCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
