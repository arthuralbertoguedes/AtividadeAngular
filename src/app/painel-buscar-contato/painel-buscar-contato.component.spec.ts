import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelBuscarContatoComponent } from './painel-buscar-contato.component';

describe('PainelBuscarContatoComponent', () => {
  let component: PainelBuscarContatoComponent;
  let fixture: ComponentFixture<PainelBuscarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelBuscarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelBuscarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
