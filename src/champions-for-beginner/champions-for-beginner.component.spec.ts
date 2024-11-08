import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsForBeginnerComponent } from './champions-for-beginner.component';

describe('ChampionsForBeginnerComponent', () => {
  let component: ChampionsForBeginnerComponent;
  let fixture: ComponentFixture<ChampionsForBeginnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsForBeginnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsForBeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
