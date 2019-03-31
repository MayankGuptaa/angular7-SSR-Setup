import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<any>) {}

  addTutorial(nam, ur) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: nam, url: ur}) );
  }

  ngOnInit() {
  }

}
