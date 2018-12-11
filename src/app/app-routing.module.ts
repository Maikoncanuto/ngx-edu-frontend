import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from "./authentication/auth.guard";

const routes: Routes = [
  {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuard]},
  {path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
