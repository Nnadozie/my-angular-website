import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniPageComponent } from './omni-page.component';

describe('OmniPageComponent', () => {
  let component: OmniPageComponent;
  let fixture: ComponentFixture<OmniPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmniPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
