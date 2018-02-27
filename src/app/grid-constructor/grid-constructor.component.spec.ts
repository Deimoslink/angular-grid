import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridConstructorComponent } from './grid-constructor.component';

describe('GridConstructorComponent', () => {
  let component: GridConstructorComponent;
  let fixture: ComponentFixture<GridConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
