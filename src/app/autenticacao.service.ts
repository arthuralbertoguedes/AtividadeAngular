import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() { }

  verificarLogin(usuario : string, senha : string) : boolean{
    
    if(usuario=="admin" && senha=="123"){
      return true;
    }
    else
      return false;
  }
}
