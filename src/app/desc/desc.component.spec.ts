import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescComponent } from './desc.component';

describe('DescComponent', () => {
  let component: DescComponent;
  let fixture: ComponentFixture<DescComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
