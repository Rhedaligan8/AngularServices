import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowListComponent } from './tvshow-list.component';

describe('TVshowListComponent', () => {
  let component: TVshowListComponent;
  let fixture: ComponentFixture<TVshowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TVshowListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVshowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
