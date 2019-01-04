import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../model/contato.model';


@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {
  private cadastrou : boolean = false;
  private nome : string = "";
  private telefone : string = "";
  private endereco : string = "";
  private contatos : ContatoModel[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  realizarCadastro(e : Event){
    e.preventDefault();
    
    this.criarContato();
    this.cadastrou = true;
    
    this.nome = "";
    this.telefone = "";
    this.endereco = "";
    
  }

  criarContato(){
    let novoContato = new ContatoModel(this.nome,this.telefone,this.endereco);
    this.contatos.push(novoContato);
    console.log(this.contatos);
  }
}
/*
 nomeContato.value=''; nomeTelefone.value=''; nomeEndereco.value='';
*/ 