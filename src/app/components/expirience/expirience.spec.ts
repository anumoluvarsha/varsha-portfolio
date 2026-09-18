import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Expirience } from './expirience';

describe('Expirience', () => {
  let component: Expirience;
  let fixture: ComponentFixture<Expirience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expirience],
    }).compileComponents();

    fixture = TestBed.createComponent(Expirience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
