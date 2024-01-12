import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaMComponent } from './cabeza-m.component';

describe('CabezaMComponent', () => {
  let component: CabezaMComponent;
  let fixture: ComponentFixture<CabezaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabezaMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabezaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
