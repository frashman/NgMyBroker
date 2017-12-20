import { IQuote } from './../interfaces/stockapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IRootObject } from '../interfaces/stockapi';



@Injectable()
export class StockreceiverService {

  constructor(private httpClient: HttpClient) { }

  getStock(): Observable<IRootObject> {
    return this.httpClient.get<IRootObject>('https://stockplaceholder.herokuapp.com/api/stocks');
  }
}
