import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor() { }

  title = 'Test Name Box';

  testNumber = 4;
  testArray = [
    {name: 'Test 1', content: 'test Content1'},
    {name: 'Test 2', content: 'test Content2'},
    {name: 'Test 3', content: 'test Content3'},
    {name: 'Test 4', content: 'test Content4'},
  ];

  onClick() {
    this.testNumber++;
    const newObj = {name: `Test ${this.testNumber}`, content: 'test Content4'};
    this.testArray.push(newObj);
  }

  ngOnInit() {
  }

}
