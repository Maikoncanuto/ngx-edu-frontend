import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    nome: 'Maikon canuto pedrosa',
    cnpj: '000000',
    telefone: '61 9 3446-1123',
    email: 'mdo@gmail.com',
    cidade: 'Brasília',
    cep: '72322-098',
    estado: 'Distrito Federal',
  }];

  getData() {
    return this.data;
  }
}
