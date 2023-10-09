import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { concatAll } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit{

  storage = "../../../assets/imgs/news/storage.png";
  desso = "../../../assets/imgs/news/desso.png";
  goldRight = "../../../assets/imgs/news/gold-right.png";

    ngOnInit(): void {
      // console.log('obj',this.user)
    }
}
