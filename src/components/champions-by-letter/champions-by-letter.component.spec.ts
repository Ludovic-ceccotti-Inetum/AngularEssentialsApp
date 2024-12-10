import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsByLetterComponent } from './champions-by-letter.component';

describe('ChampionsByLetterComponent', () => {
  let component: ChampionsByLetterComponent;
  let fixture: ComponentFixture<ChampionsByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsByLetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
