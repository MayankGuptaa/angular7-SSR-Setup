import { TestBed, async, inject } from '@angular/core/testing';

import { RouteResolverGuard } from './route-resolver.guard';

describe('RouteResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteResolverGuard]
    });
  });

  it('should ...', inject([RouteResolverGuard], (guard: RouteResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
