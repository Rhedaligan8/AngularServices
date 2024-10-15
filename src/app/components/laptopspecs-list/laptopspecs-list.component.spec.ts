import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecsListComponent } from './laptopspecs-list.component';

describe('LaptopspecsListComponent', () => {
  let component: LaptopspecsListComponent;
  let fixture: ComponentFixture<LaptopspecsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopspecsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
