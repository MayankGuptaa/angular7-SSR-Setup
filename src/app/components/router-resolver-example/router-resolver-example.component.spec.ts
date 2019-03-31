import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterResolverExampleComponent } from './router-resolver-example.component';

describe('RouterResolverExampleComponent', () => {
  let component: RouterResolverExampleComponent;
  let fixture: ComponentFixture<RouterResolverExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterResolverExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterResolverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
