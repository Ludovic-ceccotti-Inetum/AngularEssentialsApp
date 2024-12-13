import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsWithIconComponent } from './tags-with-icon.component';

describe('TagsWithIconComponent', () => {
  let component: TagsWithIconComponent;
  let fixture: ComponentFixture<TagsWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
