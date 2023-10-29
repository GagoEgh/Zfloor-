import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  burger = "/assets/imgs/header/burger.png";
  login = "/assets/imgs/header/login.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";

  bar = [
    {
      href: 'company',
      title: 'О компании'
    },
    {
      href: 'services',
      title: 'Сервисы'
    },
    {
      href: 'projects',
      title: 'Проекты'
    }, 
    {
      href: 'promotions',
      title: 'Акции'
    },
    {
      href: 'news',
      title: 'Новости'
    },
    {
      href: 'contacts',
      title: 'Контакты'
    }, 
    {
      href: 'reviews',
      title: 'Отзывы'
    },]
}
