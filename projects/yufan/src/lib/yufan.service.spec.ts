import { TestBed } from '@angular/core/testing';

import { YufanService } from './yufan.service';

describe('YufanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YufanService = TestBed.get(YufanService);
    expect(service).toBeTruthy();
  });
});
