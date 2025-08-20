import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskResetComponent } from './ask-reset.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AskResetComponent', () => {
  let component: AskResetComponent;
  let fixture: ComponentFixture<AskResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskResetComponent,  HttpClientTestingModule]
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
