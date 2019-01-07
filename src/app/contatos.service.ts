import { Injectable } from '@angular/core';
import { ContatoModel } from './model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
  public contatos : ContatoModel[] = [];
  
  constructor() { }

  adicionarContato(contato : ContatoModel) : ContatoModel[]{
    this.contatos.push(contato);
    return this.contatos;
  }
}
