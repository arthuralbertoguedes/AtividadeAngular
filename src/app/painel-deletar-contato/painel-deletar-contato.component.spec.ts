import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeletarContatoComponent } from './painel-deletar-contato.component';

describe('PainelDeletarContatoComponent', () => {
  let component: PainelDeletarContatoComponent;
  let fixture: ComponentFixture<PainelDeletarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelDeletarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeletarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
