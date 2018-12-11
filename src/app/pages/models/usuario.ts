import {Pessoa} from "./pessoa";
import {Perfil} from "./perfil";

export interface Usuario {
  id: number;
  username: string;
  pessoa: Pessoa;
  perfis: Array<Perfil>;

}
