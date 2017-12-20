import { IQuote } from './../../interfaces/stockapi';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showstock',
  templateUrl: './showstock.component.html',
  styleUrls: ['./showstock.component.css']
})
export class ShowstockComponent implements OnInit {

  @Input()
  quotes: IQuote[];


  constructor() { }

  ngOnInit() {

  }

}

