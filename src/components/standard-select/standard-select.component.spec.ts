import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSelectComponent } from './standard-select.component';

describe('StandardSelectComponent', () => {
  let component: StandardSelectComponent;
  let fixture: ComponentFixture<StandardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
