import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecontactListComponent } from './phonecontact-list.component';

describe('PhonecontactListComponent', () => {
  let component: PhonecontactListComponent;
  let fixture: ComponentFixture<PhonecontactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonecontactListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecontactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
