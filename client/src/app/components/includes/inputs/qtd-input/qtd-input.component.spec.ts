import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdInputComponent } from './qtd-input.component';

describe('QtdInputComponent', () => {
  let component: QtdInputComponent;
  let fixture: ComponentFixture<QtdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
