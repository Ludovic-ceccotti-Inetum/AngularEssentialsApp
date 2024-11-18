import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChampionFormComponent } from './search-champion-form.component';

describe('SearchChampionFormComponent', () => {
  let component: SearchChampionFormComponent;
  let fixture: ComponentFixture<SearchChampionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchChampionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchChampionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
