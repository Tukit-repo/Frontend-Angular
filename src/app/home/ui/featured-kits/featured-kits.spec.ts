import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedKits } from './featured-kits';

describe('FeaturedKits', () => {
  let component: FeaturedKits;
  let fixture: ComponentFixture<FeaturedKits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedKits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedKits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
