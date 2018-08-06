import { Component } from '@angular/core';
import {Item} from './item';
import {Patron} from './patron';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: Item[];
  patrons: Patron[];
  currentPatron: Patron;

  newPatronName: string;
  currentItemName: string;
  currentItemPrice: number;
  totalPreTaxPrice: number;

  constructor() {
    this.items = [];
    this.patrons = [];
  }

  createPatron() {
    if (this.newPatronName) {
      const newPatron: Patron = {
        id: uuid(),
        name: this.newPatronName,
        items: []
      };

      this.patrons.push(newPatron);
      this.newPatronName = '';
    }

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
      this.currentPatron.items.push(item);

      this.currentItemName = '';
      this.currentItemPrice = null;
    }
  }
}
