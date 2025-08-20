import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoResetComponent } from './do-reset.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('DoResetComponent', () => {
  let component: DoResetComponent;
  let fixture: ComponentFixture<DoResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoResetComponent,  HttpClientTestingModule],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
