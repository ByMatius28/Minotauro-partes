import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomiaMComponent } from './anatomia-m.component';

describe('AnatomiaMComponent', () => {
  let component: AnatomiaMComponent;
  let fixture: ComponentFixture<AnatomiaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomiaMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnatomiaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
