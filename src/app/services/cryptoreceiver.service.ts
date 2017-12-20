import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ICurrencies, ITickerRequest } from '../interfaces/cryptoapi';

@Injectable()
export class CryptoreceiverService {

  constructor(private httpClient: HttpClient) { }

  getCurrencyTickerRequest(sourceCurrency: string, targetCurrency: string): Observable<ITickerRequest> {
    return this.httpClient.get<ITickerRequest>('https://api.cryptonator.com/api/ticker/' + sourceCurrency + '-' + targetCurrency );
  }

  getCurrencies(): Observable<ICurrencies> {
    return this.httpClient.get<ICurrencies>('https://www.cryptonator.com/api/currencies');
  }


}
