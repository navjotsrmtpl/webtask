import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFourPage } from './menu-four.page';

describe('MenuFourPage', () => {
  let component: MenuFourPage;
  let fixture: ComponentFixture<MenuFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
