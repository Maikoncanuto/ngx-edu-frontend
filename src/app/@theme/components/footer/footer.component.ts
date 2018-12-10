import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Criado por <b><a href="https://" target="_blank">MK IT Solutions</a></b> 2018</span>
    <div class="socials">
      <a href="https://www.facebook.com/centrodeensinodjradio/" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
