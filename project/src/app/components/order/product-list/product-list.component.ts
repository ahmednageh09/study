import { Component } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  selectedCatId:number=0;
  catList:Icategory[];
  prdList:Iproduct[];
  orderTotalPrice:number=0;
  constructor(){
    this.catList=[
      {id:1,name:"laptops"},
      {id:2,name:"Taplets"},
      {id:3,name:"Mobiles"},
    ];
    this.prdList=[
      {id:100,name:"lenovo Thinkpad laptop",quantity:1,price:400,imgURL:"https://fakeimg.pl/200x100/",categoryId:1},
      {id:200,name:"Apple MacBook",quantity:0,price:700,imgURL:"https://fakeimg.pl/200x100/",categoryId:1},
      {id:300,name:"lenovo tap 2",quantity:5,price:300,imgURL:"https://fakeimg.pl/200x100/",categoryId:2},
      {id:400,name:"Samsung tap",quantity:1,price:400,imgURL:"https://fakeimg.pl/200x100/",categoryId:2},
      {id:500,name:"Samsung Note 10",quantity:0,price:500,imgURL:"https://fakeimg.pl/200x100/",categoryId:3},
      {id:600,name:"Samsung S22 Ultra",quantity:2,price:400,imgURL:"https://fakeimg.pl/200x100/",categoryId:3},
    ];
  }
  buy(prdPrice:number,count:string){
    //let itemsCount:number;
    // this.orderTotalPrice = parseInt(count) * prdPrice;
    // this.orderTotalPrice = Number(count) * prdPrice;
    this.orderTotalPrice = +count * prdPrice;
  }
}
