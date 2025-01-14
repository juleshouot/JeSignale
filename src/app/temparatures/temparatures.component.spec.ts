import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturesComponent } from './temparatures.component';

describe('TemparaturesComponent', () => {
  let component: TemperaturesComponent;
  let fixture: ComponentFixture<TemperaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
