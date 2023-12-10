import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMulFactsComponent } from './learn-mul-facts.component';

describe('LearnMulFactsComponent', () => {
  let component: LearnMulFactsComponent;
  let fixture: ComponentFixture<LearnMulFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMulFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnMulFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
