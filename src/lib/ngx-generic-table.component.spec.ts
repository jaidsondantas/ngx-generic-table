import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGenericTableComponent } from './ngx-generic-table.component';

describe('NgxGenericTableComponent', () => {
  let component: NgxGenericTableComponent;
  let fixture: ComponentFixture<NgxGenericTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGenericTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
