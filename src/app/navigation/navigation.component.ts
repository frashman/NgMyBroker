import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  @Output()
  refreshClick = new EventEmitter();

  @Output()
  addClick = new EventEmitter();

  ngOnInit() {
  }

  doRefresh() {
    this.refreshClick.emit();
  }

  doAdd() {
    this.addClick.emit();
  }

}
