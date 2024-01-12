import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernaAnMComponent } from './pierna-an-m.component';

describe('PiernaAnMComponent', () => {
  let component: PiernaAnMComponent;
  let fixture: ComponentFixture<PiernaAnMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiernaAnMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiernaAnMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
