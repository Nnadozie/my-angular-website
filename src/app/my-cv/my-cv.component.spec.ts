import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCvComponent } from './my-cv.component';

describe('MyCvComponent', () => {
  let component: MyCvComponent;
  let fixture: ComponentFixture<MyCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
