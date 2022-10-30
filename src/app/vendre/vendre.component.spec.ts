import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VendreComponent } from './vendre.component';

describe('VendreComponent', () => {
  let component: VendreComponent;
  let fixture: ComponentFixture<VendreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
