import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListComponentComponent } from './dynamic-list.component';

describe('DynamicListComponentComponent', () => {
  let component: DynamicListComponentComponent;
  let fixture: ComponentFixture<DynamicListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
