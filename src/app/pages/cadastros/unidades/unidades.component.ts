import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableService} from "../../../@core/data/smart-table.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UnidadesModalComponent} from "./unidades-modal/unidades-modal.component";


@Component({
  selector: 'ngx-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,
              private modalService: NgbModal) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
  }

  //Tabela
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      cnpj: {
        title: 'Cnpj',
        type: 'string',
      },
      telefone: {
        title: 'Telefone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      cidade: {
        title: 'Cidade',
        type: 'string',
      },
      cep:{
        title: 'Cep',
        type: 'string'
      },
      estado:{
        title: 'Estado',
        type: 'string'
      }
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Você tem certeza que deseja excluir?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //Modal
  showModal(){
    const activeModal = this.modalService.open(UnidadesModalComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.componentInstance.modalHeader = 'Cadastro de unidade';
  }

}
