import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaLezioniComponent } from './carta-lezioni.component';

describe('CartaLezioniComponent', () => {
  let component: CartaLezioniComponent;
  let fixture: ComponentFixture<CartaLezioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaLezioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaLezioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
