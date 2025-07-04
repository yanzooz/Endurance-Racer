import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { carDetailResolver } from './car-detail.resolver';

describe('carDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => carDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
