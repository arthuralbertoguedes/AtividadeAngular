import { Component, OnInit, Output } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-painel-login',
  templateUrl: './painel-login.component.html',
  styleUrls: ['./painel-login.component.css']
})
export class PainelLoginComponent implements OnInit {

  //@Output() public carregarPainelPrincipal : EventEmitter<any> = new EventEmitter();

  public telaLoginAberta : boolean;
  private usuario : string;
  private senha : string;
  private mensagemErro : boolean;

  constructor(private service : AutenticacaoService) {
    
    this.telaLoginAberta = true;
    this.mensagemErro = false;
    
  }

  ngOnInit() {
   
  }

  capturarUsuario(usuario : string){
    this.usuario = usuario;
  }

  capturarSenha(senha : string){
    this.senha = senha;
  }

  autenticarUsuario(e : Event){
    e.preventDefault();
    let logou = this.service.verificarLogin(this.usuario, this.senha);
    if(logou==true){
      this.mensagemErro=false;
      this.telaLoginAberta = false;
    }
    else{
      this.mensagemErro=true;
    }
  }
}
