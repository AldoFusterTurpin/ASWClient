import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestPageComponent } from './newest-page.component';

describe('NewestPageComponent', () => {
  let component: NewestPageComponent;
  let fixture: ComponentFixture<NewestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
