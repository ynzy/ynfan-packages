import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YufanComponent } from './yufan.component';

describe('YufanComponent', () => {
  let component: YufanComponent;
  let fixture: ComponentFixture<YufanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YufanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YufanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
