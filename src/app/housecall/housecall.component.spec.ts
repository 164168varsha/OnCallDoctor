import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecallComponent } from './housecall.component';

describe('HousecallComponent', () => {
  let component: HousecallComponent;
  let fixture: ComponentFixture<HousecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
