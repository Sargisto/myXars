import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface myItem {
  name: string;
  price: number;
  money: number;
  sum: number;
  profit: number;
  allICountProfit: number;
  count: number;
}

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.scss'],
})
export class TableItemsComponent {
  public items: Array<myItem>;
  public sumMoney: number = 0;
  public sumProfit: number = 0;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.items = [
      {
        name: 'Xars',
        price: 600,
        money:0,
        profit: 250,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Xars Lavash',
        price: 1000,
        money:0,
        profit: 500,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Hot-Dog',
        price: 500,
        money:0,
        profit: 250,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Hot-Dog Lavash',
        price: 600,
        money:0,
        profit: 300,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Free',
        price: 400,
        money:0,
        profit: 200,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Water',
        price: 200,
        money:0,
        profit: 73,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Cola 0.25',
        price: 300,
        money:0,
        profit: 129,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Cola 0.5',
        price: 400,
        money:0,
        profit: 112,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Добрый',
        price: 350,
        money:0,
        profit: 70,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Fuze tee',
        price: 500,
        money:0,
        profit: 128,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Pulpy',
        price: 500,
        money:0,
        profit: 94,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Թան փոքր',
        price: 250,
        money:0,
        profit: 65,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Թան մեծ',
        price: 300,
        money:0,
        profit: 90,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Թան գազով',
        price: 250,
        money:0,
        profit: 60,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
      {
        name: 'Տոմատ սոկ',
        price: 300,
        money:0,
        profit: 105,
        allICountProfit: 0,
        sum: 0,
        count: 0,
      },
    ];
  }

  calc(item: myItem) {
    this.sumMoney = 0;
    this.sumProfit = 0;
    console.log(item);
    this.items = this.items.map(itm => {

      if(itm.name === item.name) {
        itm.allICountProfit = item.profit * item.count;
        itm.money = item.price * item.count;
      }
      this.sumMoney+=itm.money;
      this.sumProfit+=itm.allICountProfit;
      return itm
    });
    console.log(this.items);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
