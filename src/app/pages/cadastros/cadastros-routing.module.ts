import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CadastrosComponent} from "./cadastros.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {UnidadesComponent} from "./unidades/unidades.component";
import {UnidadesModalComponent} from "./unidades/unidades-modal/unidades-modal.component";


const routes: Routes = [{
  path: '',
  component: CadastrosComponent,
  children: [
    {
      path: 'usuarios',
      component: UsuariosComponent
    },
    {
      path: 'unidades',
      component: UnidadesComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastrosRoutingModule{

}

export const routedComponents = [
  CadastrosComponent,
  UsuariosComponent
]
