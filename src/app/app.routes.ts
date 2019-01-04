
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { PainelInicialComponent } from './painel-inicial/painel-inicial.component';
import { PainelBuscarContatoComponent } from './painel-buscar-contato/painel-buscar-contato.component';
import { PainelDeletarContatoComponent } from './painel-deletar-contato/painel-deletar-contato.component';
import { PainelnovoContatoComponent } from './painelnovo-contato/painelnovo-contato.component';




export const ROUTES = [
    {path: "", component: PainelUsuarioComponent},
    {path: "adicionarContato", component: PainelnovoContatoComponent},
    {path: "deletarContato", component: PainelDeletarContatoComponent},
    {path: "buscarContato", component: PainelBuscarContatoComponent}
]