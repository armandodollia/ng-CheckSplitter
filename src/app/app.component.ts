import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  currentItemName = '';
  currentItemPrice = null;
  totalPrice = 0;

  addToItems(){
    if (this.currentItemName && this.currentItemPrice && !!Number(this.currentItemPrice)) {
      this.items.push({
        name: this.currentItemName,
        price: this.currentItemPrice
      });

      this.currentItemName = '';
      this.currentItemPrice = null;
    }


  }
}
