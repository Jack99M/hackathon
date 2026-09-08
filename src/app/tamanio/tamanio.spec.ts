import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tamanio } from './tamanio';

describe('Tamanio', () => {
  let component: Tamanio;
  let fixture: ComponentFixture<Tamanio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tamanio],
    }).compileComponents();

    fixture = TestBed.createComponent(Tamanio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
