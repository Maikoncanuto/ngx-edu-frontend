import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'Cadastros',
    icon: 'nb-compose',
    children: [
      {
        title: 'Usuários',
        link: '/pages/cadastros/usuarios'
      },
      {
        title: 'Unidades',
        link: '/pages/cadastros/unidades'
      }
    ]
  }
];
