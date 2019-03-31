import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../../models/tutorial.model';
// Import our actions at the top
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

    // Section 1
    tutorials: Observable<Tutorial[]>;

    // Section 2
    constructor(private store: Store<any>) {
      this.tutorials = store.select('tutorial');
    }

  // In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
  }

  ngOnInit() {
  }

}
