import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdfComponent } from './view-pdf.component';

describe('ViewPdfComponent', () => {
  let component: ViewPdfComponent;
  let fixture: ComponentFixture<ViewPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
