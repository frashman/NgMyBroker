import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  @Output()
  addStockClick = new EventEmitter();

  searchText = '';

  constructor() { }

  ngOnInit() {
  }

  clickAddStock() {
    this.addStockClick.emit(this.searchText);
  }
}
