import { TestBed } from '@angular/core/testing';

import { AngularVersionInformationService } from './angular-version-information.service';

describe('AngularVersionInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularVersionInformationService = TestBed.get(AngularVersionInformationService);
    expect(service).toBeTruthy();
  });
});
