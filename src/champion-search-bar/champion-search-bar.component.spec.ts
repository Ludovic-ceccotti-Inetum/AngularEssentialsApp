import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSearchBarComponent } from './champion-search-bar.component';

describe('ChampionSearchBarComponent', () => {
  let component: ChampionSearchBarComponent;
  let fixture: ComponentFixture<ChampionSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
