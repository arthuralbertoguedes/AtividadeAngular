import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../model/contato.model';
import { ContatosService } from '../contatos.service';

import {TableModule} from 'primeng/table';

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
  private erroCadastro : boolean = false;
  private data : any;
  private cols : any[];
  constructor(private contatoService : ContatosService) {
      console.log(this.data)
   }

  ngOnInit() {
    this.cols = [
      {field: 'nome', header: 'Nome '},
      {field: 'telefone', header: 'Telefone '},
      {field: 'endereco', header: 'Endereço '}
    ];
    console.log(this.cols)
  }

  realizarCadastro(e : Event) : void{
    e.preventDefault();
    this.criarContato();
  }

  criarContato() : void{
    
    if(
      this.nome == "" || this.telefone == "" || this.endereco == ""){
      this.erroCadastro = true;
      this.cadastrou = false;
    }
    else{
    let novoContato = new ContatoModel(this.nome,this.telefone,this.endereco);
      this.contatoService.adicionarContato(novoContato);
      
      this.nome = "";
      this.telefone = "";
      this.endereco = "";

      this.cadastrou = true;
      this.erroCadastro = false;

    }

  }

  //Ajustar aqui
  setData(data : any){
        let dataAniversario = new Date(data);
        console.log(dataAniversario)
    }
}
