import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "../../../@theme/theme.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { UnidadesModalComponent } from './unidades-modal/unidades-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UnidadesComponent} from "./unidades.component";

@NgModule({
  declarations: [UnidadesComponent, UnidadesModalComponent],
  imports: [
    CommonModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgbModule
  ],
  entryComponents: [
    UnidadesModalComponent
  ]
})
export class UnidadesModule { }
