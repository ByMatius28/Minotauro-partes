import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazosMComponent } from './brazos-m.component';

describe('BrazosMComponent', () => {
  let component: BrazosMComponent;
  let fixture: ComponentFixture<BrazosMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrazosMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrazosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
