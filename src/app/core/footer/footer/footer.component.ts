import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  topMenu = ['Ковролин','Ковровая плитка','Линолеум','Дизайн-плитка ПВХ','Ламинат','Сопутствующие товары'];
  bottomMenu = ['Главная','О компании','Сервисы','Проекты', 'Акции','Новости','Контакты','Отзывы']
}
