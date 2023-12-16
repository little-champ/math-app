import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMulFactsComponent } from './test-mul-facts.component';

describe('TestMulFactsComponent', () => {
  let component: TestMulFactsComponent;
  let fixture: ComponentFixture<TestMulFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMulFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestMulFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
