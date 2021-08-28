import { TestBed } from '@angular/core/testing';

import { NgxGenericTableService } from './ngx-generic-table.service';

describe('NgxGenericTableService', () => {
  let service: NgxGenericTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGenericTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
