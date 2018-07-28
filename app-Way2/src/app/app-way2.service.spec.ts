import { TestBed, inject } from '@angular/core/testing';

import { AppWay2Service } from './app-way2.service';

describe('AppWay2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWay2Service]
    });
  });

  it('should be created', inject([AppWay2Service], (service: AppWay2Service) => {
    expect(service).toBeTruthy();
  }));
});
