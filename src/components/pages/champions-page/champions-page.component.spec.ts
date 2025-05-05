import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsPageComponent } from './champions-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChampionsPageComponent', () => {
  let component: ChampionsPageComponent;
  let fixture: ComponentFixture<ChampionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsPageComponent,  HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
