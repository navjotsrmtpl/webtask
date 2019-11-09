import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTwoPage } from './menu-two.page';

describe('MenuTwoPage', () => {
  let component: MenuTwoPage;
  let fixture: ComponentFixture<MenuTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
