import { Injectable } from '@angular/core';
import {Http, Response , Headers,} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }
  
  getShoppingItems(){
    return this.http.get('http://localhost:3000/api/items').pipe( map(res => res.json()));
   
  }

  addShoppingItem(newItem) {
    let headers = new Headers();
    headers.append('content-Type' , 'appliction/json');
    return this.http.post('http://localhost:3000/api/item' , newItem , {headers: headers}).pipe( map(res => res.json()));
  }


}
