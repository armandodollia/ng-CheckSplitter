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
  tax: number;
  tipPercent: number;

  constructor() {
    this.items = [];
    this.patrons = [];
  }

  get tipAmount(){
    return (this.tax + this.totalPreTaxPrice) * (this.tipPercent / 100);
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

  addItemToPatron(id, item) {
    const patron = this.patrons.find(i => i.id === id);
    const itemIndex = patron.items.findIndex(i => i.id === item.id);

    if (itemIndex === -1) {
      patron.items.push(item);
    }
  }

  addToItems() {
    if (
      this.currentItemName &&
      this.currentItemPrice &&
      !!Number(this.currentItemPrice)
    ) {
      const item: Item = {
        id: uuid(),
        name: this.currentItemName,
        price: this.currentItemPrice
      };
      this.items.push(item);

      this.currentItemName = '';
      this.currentItemPrice = null;
    }
  }
}
