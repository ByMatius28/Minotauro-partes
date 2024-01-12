import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PechoMComponent } from './pecho-m.component';

describe('PechoMComponent', () => {
  let component: PechoMComponent;
  let fixture: ComponentFixture<PechoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PechoMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PechoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
