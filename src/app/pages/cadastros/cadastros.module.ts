import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CadastrosRoutingModule, routedComponents} from './cadastros-routing.module';
import {ThemeModule} from '../../@theme/theme.module';

import {UnidadesModule} from './unidades/unidades.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    ThemeModule,
    CadastrosRoutingModule,
    UnidadesModule
  ]
})
export class CadastrosModule {
}
