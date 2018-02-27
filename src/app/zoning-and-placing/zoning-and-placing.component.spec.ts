import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoningAndPlacingComponent } from './zoning-and-placing.component';

describe('ZoningAndPlacingComponent', () => {
  let component: ZoningAndPlacingComponent;
  let fixture: ComponentFixture<ZoningAndPlacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoningAndPlacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoningAndPlacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
