import { Injectable } from '@angular/core';
import { ContatoModel } from './model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private contatos : ContatoModel[] = [];
  
  
  constructor() { }

  adicionarContato(contato : ContatoModel) : void{
    this.contatos.push(contato);
    console.log(this.contatos);
  }
}
