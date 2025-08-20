import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCategoryItemsComponent } from './object-category-items.component';

describe('ObjectCategoryItemsComponent', () => {
  let component: ObjectCategoryItemsComponent;
  let fixture: ComponentFixture<ObjectCategoryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectCategoryItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
