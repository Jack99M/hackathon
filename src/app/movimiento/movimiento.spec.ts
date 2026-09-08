import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimientoChange, MovimientoComponent } from './movimiento';

describe('MovimientoComponent', () => {
  let component: MovimientoComponent;
  let fixture: ComponentFixture<MovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimientoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovimientoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts with an identity movement matrix', () => {
    expect(component.matrix()).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });

  it('builds translation values into the matrix and emits the change', () => {
    let change: MovimientoChange | undefined;

    component.transformchange.subscribe((value) => {
      change = value;
    });

    component.ontranslatexchange('120');
    component.ontranslateychange('-40');

    expect(component.matrix()).toEqual([1, 0, 0, 0, 1, 0, 120, -40, 1]);
    expect(change?.translatex).toBe(120);
    expect(change?.translatey).toBe(-40);
    expect(change?.matrix).toEqual(component.matrix());
  });

  it('uses negative scale values for reflections', () => {
    component.togglereflectionx();
    component.togglereflectiony();

    expect(component.matrix()).toEqual([-1, 0, 0, 0, -1, 0, 0, 0, 1]);
  });

  it('resets every movement value', () => {
    component.ontranslatexchange('80');
    component.ontranslateychange('25');
    component.onrotationchange('90');
    component.togglereflectionx();
    component.resetmovement();

    expect(component.translatex()).toBe(0);
    expect(component.translatey()).toBe(0);
    expect(component.rotation()).toBe(0);
    expect(component.reflectx()).toBe(false);
    expect(component.reflecty()).toBe(false);
    expect(component.matrix()).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });
});