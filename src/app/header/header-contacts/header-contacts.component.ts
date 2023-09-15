import { Component } from '@angular/core';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss']
})
export class HeaderContactsComponent {
  logo = "../../../assets/imgs/header/logo.png";
  call = "../../../assets/imgs/header/call.png";
  location = "../../../assets/imgs/header/location.png";
  search = "../../../assets/imgs/header/Vector.png";
}
