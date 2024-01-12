import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernasMComponent } from './piernas-m.component';

describe('PiernasMComponent', () => {
  let component: PiernasMComponent;
  let fixture: ComponentFixture<PiernasMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiernasMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiernasMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
