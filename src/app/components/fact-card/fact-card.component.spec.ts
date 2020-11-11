import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactCardComponent } from './fact-card.component';

describe('FactCardComponent', () => {
  let component: FactCardComponent;
  let fixture: ComponentFixture<FactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
