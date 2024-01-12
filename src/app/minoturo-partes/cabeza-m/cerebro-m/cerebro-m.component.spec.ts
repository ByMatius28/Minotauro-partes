import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebroMComponent } from './cerebro-m.component';

describe('CerebroMComponent', () => {
  let component: CerebroMComponent;
  let fixture: ComponentFixture<CerebroMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerebroMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerebroMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
