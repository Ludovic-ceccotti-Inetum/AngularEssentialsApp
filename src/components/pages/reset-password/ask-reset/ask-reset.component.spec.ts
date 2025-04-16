import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskResetComponent } from './ask-reset.component';

describe('AskResetComponent', () => {
  let component: AskResetComponent;
  let fixture: ComponentFixture<AskResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
