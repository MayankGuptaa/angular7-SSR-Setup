import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {


  sliderArry: Array<any> = [];
  counter = 0;
  test: Array<any> = [
    {title: 'title 1', content: 'Loreipsum 1'},
    {title: 'title 2', content: 'Loreipsum 2'},
    {title: 'title 3', content: 'Loreipsum 3'},
    {title: 'title 4', content: 'Loreipsum 4'},
    {title: 'title 5', content: 'Loreipsum 5'},
    {title: 'title 6', content: 'Loreipsum 6'},
    {title: 'title 7', content: 'Loreipsum 7'},
    {title: 'title 8', content: 'Loreipsum 8'},
    {title: 'title 9', content: 'Loreipsum 9'},
    {title: 'title 10', content: 'Loreipsum 10'},
    {title: 'title 11', content: 'Loreipsum 11'},
    {title: 'title 12', content: 'Loreipsum 12'},
    {title: 'title 13', content: 'Loreipsum 13'},
    {title: 'title 14', content: 'Loreipsum 14'},
    {title: 'title 15', content: 'Loreipsum 15'},
    {title: 'title 16', content: 'Loreipsum 16'},
    {title: 'title 17', content: 'Loreipsum 17'},
    {title: 'title 18', content: 'Loreipsum 18'},
    {title: 'title 19', content: 'Loreipsum 19'},
    {title: 'title 20', content: 'Loreipsum 20'},
    {title: 'title 21', content: 'Loreipsum 21'},
    {title: 'title 22', content: 'Loreipsum 22'},
    {title: 'title 23', content: 'Loreipsum 23'},
    {title: 'title 24', content: 'Loreipsum 24'},
    {title: 'title 25', content: 'Loreipsum 25'},
    {title: 'title 26', content: 'Loreipsum 26'},
    {title: 'title 27', content: 'Loreipsum 27'},
    {title: 'title 28', content: 'Loreipsum 28'},
    {title: 'title 29', content: 'Loreipsum 29'},
  ];

  constructor() {
  }

    prevFunction(num) {
      if (this.counter > 1 ) {
        this.counter -= num;
        this.sliderArry.splice(0);
        this.test.forEach((v, inx ) => {
          const index = inx + this.counter;
          if (this.sliderArry.length !== num) {
            this.sliderArry.push(
              this.test[index]
            );
          }
        });
      }
    }


  nextFunction(num) {
    if (this.test.length > this.counter + num) {
      this.counter += num;
      this.sliderArry.splice(0);
      this.test.forEach((v, inx ) => {
        const index = inx + this.counter;
        if (this.sliderArry.length !== num) {
          this.sliderArry.push(
            this.test[index]
          );
        }
      });
    }
  }

  startPagination(num) {
    this.test.forEach(v => {
      if (this.sliderArry.length !== num) {
        this.sliderArry.push(v);
      }
    });
  }

  onPre() {
    this.prevFunction(3);
   }

  onNext() {
    this.nextFunction(3);
  }

  ngOnInit() {
    this.startPagination(3);
  }


}
