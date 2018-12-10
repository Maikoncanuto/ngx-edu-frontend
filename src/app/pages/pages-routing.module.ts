import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from "./pages.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent,},
    {path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule'}
  ]
}, {
  path: 'login',
  component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
