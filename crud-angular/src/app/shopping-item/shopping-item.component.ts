import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { DataService } from '../data.service'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {

  shoppingItemList: Item[] = [];
  
  constructor(private dataService:  DataService) { }

  getItems(){
    this.dataService.getShoppingItems().subscribe(items => {
      this.shoppingItemList = items;
      console.log('data from dataservice: ' + this.shoppingItemList[0].itemName);
    })
    
  }

  addItem(form){
    let newItem: Item ={
   
      itemName:  form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false

    }
    this.dataService.addShoppingItem(newItem).subscribe(item => {
      console.log(item);
      this.getItems();
    })
  }




  ngOnInit() {
    this.getItems();
  }

}
