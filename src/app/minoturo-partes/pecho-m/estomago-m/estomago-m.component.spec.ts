import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstomagoMComponent } from './estomago-m.component';

describe('EstomagoMComponent', () => {
  let component: EstomagoMComponent;
  let fixture: ComponentFixture<EstomagoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstomagoMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstomagoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
