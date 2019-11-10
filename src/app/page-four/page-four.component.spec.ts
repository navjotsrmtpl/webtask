import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFourComponent } from './page-four.component';

describe('PageFourComponent', () => {
  let component: PageFourComponent;
  let fixture: ComponentFixture<PageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFourComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
