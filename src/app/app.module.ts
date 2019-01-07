import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelInicialComponent } from './painel-inicial/painel-inicial.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { PainelLoginComponent } from './painel-login/painel-login.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { PainelnovoContatoComponent } from './painelnovo-contato/painelnovo-contato.component';
import { PainelBuscarContatoComponent } from './painel-buscar-contato/painel-buscar-contato.component';
import { PainelDeletarContatoComponent } from './painel-deletar-contato/painel-deletar-contato.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    PainelInicialComponent,
    TopoComponent,
    RodapeComponent,
    PainelUsuarioComponent,
    PainelLoginComponent,
    PainelnovoContatoComponent,
    PainelBuscarContatoComponent,
    PainelDeletarContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AccordionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
