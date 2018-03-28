import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTestComponent } from './di-test.component';

describe('DiTestComponent', () => {
  let component: DiTestComponent;
  let fixture: ComponentFixture<DiTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
