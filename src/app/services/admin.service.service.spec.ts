import { TestBed } from '@angular/core/testing';

import { Admin.ServiceService } from './admin.service.service';

describe('Admin.ServiceService', () => {
  let service: Admin.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Admin.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
