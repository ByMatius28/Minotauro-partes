import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazosAnMComponent } from './brazos-an-m.component';

describe('BrazosAnMComponent', () => {
  let component: BrazosAnMComponent;
  let fixture: ComponentFixture<BrazosAnMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrazosAnMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrazosAnMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
