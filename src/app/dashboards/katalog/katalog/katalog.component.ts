import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { katalogStartAction } from 'src/app/store/action';
import { covrolins } from 'src/app/store/selectors';
import { CovrolinInterface } from 'src/app/types/covrolin.interface';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.scss']
})
export class KatalogComponent implements OnInit {

  covrolins$?: Observable<CovrolinInterface[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(katalogStartAction());
    this.covrolins$ = this.store.pipe(select(covrolins));
  }
}


