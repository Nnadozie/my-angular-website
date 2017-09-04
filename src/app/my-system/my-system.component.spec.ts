import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySystemComponent } from './my-system.component';

describe('MySystemComponent', () => {
  let component: MySystemComponent;
  let fixture: ComponentFixture<MySystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
