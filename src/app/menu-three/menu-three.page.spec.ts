import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThreePage } from './menu-three.page';

describe('MenuThreePage', () => {
  let component: MenuThreePage;
  let fixture: ComponentFixture<MenuThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
