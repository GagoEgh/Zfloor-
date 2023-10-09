import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logo = "/assets/imgs/header/logo.png";
  call = "/assets/imgs/header/call.png";
  location = "/assets/imgs/header/location.png";
  search = "/assets/imgs/header/Vector.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";
  login = "/assets/imgs/header/login.png";
}
