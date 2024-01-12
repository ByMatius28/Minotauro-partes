import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinoturoPartesComponent } from './minoturo-partes.component';

describe('MinoturoPartesComponent', () => {
  let component: MinoturoPartesComponent;
  let fixture: ComponentFixture<MinoturoPartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinoturoPartesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinoturoPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
