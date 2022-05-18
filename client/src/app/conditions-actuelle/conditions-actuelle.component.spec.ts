import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsActuelleComponent } from './conditions-actuelle.component';

describe('ConditionsActuelleComponent', () => {
  let component: ConditionsActuelleComponent;
  let fixture: ComponentFixture<ConditionsActuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsActuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsActuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
