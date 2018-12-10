import {Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {SmartTableService} from "../../../../@core/data/smart-table.service";
import {Unidade} from "../unidade.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ngx-unidades-modal',
  templateUrl: './unidades-modal.component.html',
  styleUrls: ['./unidades-modal.component.scss']
})
export class UnidadesModalComponent implements OnInit{

  modalHeader: string;
  unidade: Unidade;

  unidadeModalForm: FormGroup;
  primeiroForm: FormGroup;
  segundoForm: FormGroup;
  terceiroForm: FormGroup;
  finalizacaoForm: FormGroup;

  constructor(private activeModal: NgbActiveModal,
              private tableService: SmartTableService,
              private formBuilder: FormBuilder,
              ) { }

  ngOnInit() {
    this.primeiroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required]
    });

    this.segundoForm = this.formBuilder.group({
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.terceiroForm = this.formBuilder.group({
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required]
    });
  }

  onFirstSubmit() {
    this.primeiroForm.markAsDirty();
  }

  onSecondSubmit() {
    this.segundoForm.markAsDirty();
  }

  onThirdSubmit() {
    console.log('TERMINADOu');
    this.terceiroForm.markAsDirty();
  }

  closeModal() {
    this.activeModal.close();
  }

  salvarConteudo(){
    console.log('Chamando salvar' + this.unidade);
    this.tableService.getData().push(this.unidade);
  }

}
