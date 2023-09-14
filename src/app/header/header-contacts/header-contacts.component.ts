import { Component } from '@angular/core';

@Component({
  selector: 'app-header-contacts',
  templateUrl: './header-contacts.component.html',
  styleUrls: ['./header-contacts.component.scss']
})
export class HeaderContactsComponent {
  logo = "../../../assets/imgs/logo.png";
  call = "../../../assets/imgs/call.png";
  location = "../../../assets/imgs/location.png";
  search = "../../../assets/imgs/Vector.png";
}
