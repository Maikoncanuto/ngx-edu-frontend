import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from "./pages.component";
import {AuthGuard} from "../authentication/auth.guard";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule', canActivate: [AuthGuard]}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
