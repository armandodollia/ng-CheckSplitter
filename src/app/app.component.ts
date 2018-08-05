import { Component } from '@angular/core';
import {Item} from './item';
import {Patron} from './patron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[];
  patrons: Patron[];

  currentPatronName: string;
  currentItemName: string;
  currentItemPrice: number;
  totalPreTaxPrice: number;

  constructor() {
    this.items = [];
    this.patrons = [];
  }

  createPatron(){
    const newPatron: Patron = {
      name: this.currentPatronName,
      items: []
    };

    this.patrons.push(newPatron);
    this.currentPatronName = '';
  }

  addToItems() {
    if (
      this.currentItemName &&
      this.currentItemPrice &&
      !!Number(this.currentItemPrice)
    ) {
      const item: Item = {
        name: this.currentItemName,
        price: this.currentItemPrice
      };
      this.items.push(item);

      this.currentItemName = '';
      this.currentItemPrice = null;
    }
  }
}
