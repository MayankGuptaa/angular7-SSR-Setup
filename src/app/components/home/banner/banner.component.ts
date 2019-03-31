import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  counter = 0;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  productTest: Array<any> = [
    {title: 'title 1', content: 'Loreipsum 1', id: 'adflkjhfdsadf1d1', quantity: '1'},
    {title: 'title 2', content: 'Loreipsum 2', id: 'adflkjhf434dsad2', quantity: '1'},
    {title: 'title 3', content: 'Loreipsum 3', id: 'adflkjhf5656dsa3', quantity: '1'},
    {title: 'title 4', content: 'Loreipsum 4', id: 'adflkjhfdfgfdsa4', quantity: '1'},
    {title: 'title 5', content: 'Loreipsum 5', id: 'adflkjhfdfgdsad5', quantity: '1'},
    {title: 'title 6', content: 'Loreipsum 6', id: 'adflkjhfdfgdsad6', quantity: '1'},
    {title: 'title 7', content: 'Loreipsum 7', id: 'adflkjhfddfgsad7', quantity: '1'},
    {title: 'title 8', content: 'Loreipsum 8', id: 'adflkjhfddfgsad8', quantity: '1'},
    {title: 'title 9', content: 'Loreipsum 9', id: 'adflkjhfddfgsad9', quantity: '1'},
    {title: 'title 10', content: 'Loreipsum 10', id: 'adflkjhfdfgdsad10', quantity: '1'}
  ];

  cartItems: Array<any> = [];

  addProduct(data, i) {
    this.productTest[i].quantity++;
  }
  removeProduct(data, i) {
    if (this.productTest[i].quantity > 0) {
      this.productTest[i].quantity--;
    }
  }

  addToCart(data, i) {
    if (isPlatformBrowser(this.platformId)) {

      if (!this.cartItems.length) {
        console.log('length');
        this.counter++;
        this.cartItems.push(data);
        localStorage.setItem('CART_ITEMS', JSON.stringify(this.cartItems));
      } else if (this.cartItems.length) {
        console.log('no length');
        const proId = [];
        this.cartItems.filter(v => {
          proId.push(v.id);
        });

        if (!proId.includes(data.id)) {
          this.counter++;
          this.cartItems.push(data);
          localStorage.setItem('CART_ITEMS', JSON.stringify(this.cartItems));
        }

      }

    }
  }

  removeItem(i) {
    this.cartItems.splice(i, 1);
    this.counter--;
    localStorage.setItem('CART_ITEMS', JSON.stringify(this.cartItems));
  }

  ngOnInit() {
    if (localStorage.getItem('CART_ITEMS')) {
      this.cartItems = JSON.parse(localStorage.getItem('CART_ITEMS'));
      this.counter = JSON.parse(localStorage.getItem('CART_ITEMS')).length;
      console.log(this.cartItems);
    }
  }

}
