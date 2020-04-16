import { TestBed } from '@angular/core/testing';

import { StoreitemService } from './storeitem.service';

describe('StoreitemService', () => {
  let service: StoreitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
