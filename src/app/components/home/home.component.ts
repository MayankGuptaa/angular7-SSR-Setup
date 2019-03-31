import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit, OnChanges {

  message = 'Mayank Mayank';

  constructor(cd: ChangeDetectorRef) { }

  @ViewChild(TestComponent) test;

  ngAfterViewInit() {
    console.log(this.test.title);
    this.test.title = 'aaaaa';
  }
  ngOnChanges() {
    console.log(this.test, 'on change');
  }

  ngOnInit() {
  }

}
