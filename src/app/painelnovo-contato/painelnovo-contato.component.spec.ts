import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelnovoContatoComponent } from './painelnovo-contato.component';

describe('PainelnovoContatoComponent', () => {
  let component: PainelnovoContatoComponent;
  let fixture: ComponentFixture<PainelnovoContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelnovoContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelnovoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
