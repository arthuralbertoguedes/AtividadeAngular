import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelInicialComponent } from './painel-inicial.component';

describe('PainelInicialComponent', () => {
  let component: PainelInicialComponent;
  let fixture: ComponentFixture<PainelInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
