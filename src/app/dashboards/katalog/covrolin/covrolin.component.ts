import { Component, Input } from '@angular/core';
import { CovrolinInterface } from 'src/app/types/covrolin.interface';

@Component({
  selector: 'app-covrolin',
  templateUrl: './covrolin.component.html',
  styleUrls: ['./covrolin.component.scss']
})
export class CovrolinComponent {

  @Input()covrolin?:CovrolinInterface;

}
