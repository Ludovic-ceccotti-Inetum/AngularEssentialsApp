import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsOfTheWeekComponent } from './champions-of-the-week.component';

describe('ChampionsOfTheWeekComponent', () => {
  let component: ChampionsOfTheWeekComponent;
  let fixture: ComponentFixture<ChampionsOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsOfTheWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
