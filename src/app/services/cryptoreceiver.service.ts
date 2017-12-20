import { Observable } from 'rxjs/Observable';
import { RootObject, Quote, IRootObject } from './../interfaces/stockapi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrencies, ITickerRequest } from '../interfaces/cryptoapi';

@Injectable()
export class CryptoreceiverService {

  constructor(private httpClient: HttpClient) { }

  getCurrencyTickerRequest(sourceCurrency: string, targetCurrency: string): Observable<ITickerRequest> {
    return this.httpClient.get<ITickerRequest>('https://api.cryptonator.com/api/ticker/' + sourceCurrency + '-' + targetCurrency);
  }

  getCurrencies(): Observable<ICurrencies> {
    return this.httpClient.get<ICurrencies>('https://www.cryptonator.com/api/currencies');
  }

  getStock(): Observable<IRootObject> {
    let obs = new Observable<IRootObject>(tr => {

      let wrappedRootObject = new RootObject();
      wrappedRootObject.query.results.quote = [];

      this.getCurrencies().subscribe(currencies => {
        currencies.rows.forEach(element => {
          let quote = new Quote();
          quote.name = element.name;

          this.getCurrencyTickerRequest(element.code, 'EUR').subscribe(
            ticker => {

              if (ticker.success) {
                quote.symbol = ticker.ticker.base;
                quote.currency = ticker.ticker.target;
                quote.lastTradePriceOnly = ticker.ticker.price;
                quote.lastTradeDate = ticker.timestamp.toString();
                quote.change = ticker.ticker.change;

                wrappedRootObject.query.results.quote.push(quote);
              }
            });
        });
      });
      tr.next(wrappedRootObject);

    });
    return obs;
  }
}
