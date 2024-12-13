import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSkinsComponent } from './champion-skins.component';

describe('ChampionSkinsComponent', () => {
  let component: ChampionSkinsComponent;
  let fixture: ComponentFixture<ChampionSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSkinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
