import { StockreceiverService } from './../services/stockreceiver.service';
import { IQuotes, IQuery, IQuote } from './../interfaces/stockapi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAddStockMode = false;
  quotes: IQuote[] = [];
  subscribedQuotes: IQuote[] = [];

  constructor(private stockReceiverService: StockreceiverService) { }

  ngOnInit() {
  }

  addStock() {
    this.isAddStockMode = true;
    this.updateQuotesFromService();
  }

  refreshStock () {
    this.isAddStockMode = false;
    this.updateQuotesFromService();
    this.updateSubscribedQuotes();
  }

  updateSubscribedQuotes() {
    const refreshedQuotes: IQuote[] = [];

    this.subscribedQuotes.forEach(quote => {
      const foundQuote = this.quotes.find(x => x.symbol === quote.symbol);
      if ( foundQuote ) {
          refreshedQuotes.push(foundQuote);
        }
    });

    this.subscribedQuotes = refreshedQuotes;
  }

  updateQuotesFromService()  {
    this.stockReceiverService.getStock().subscribe(
      (stocks) => {
        const q = stocks.query.results;
        this.quotes = q.quote; }
    );
  }

  trySubscribeToStockName(name: string) {
    this.quotes.forEach(quote => {
      const foundQuote = this.quotes.find(x => x.symbol === name);
      const foundInSubscribedQuotes = this.subscribedQuotes.find(x => x.symbol === name);

      if ( foundQuote && !foundInSubscribedQuotes) {
          this.subscribedQuotes.push(foundQuote);
        }
    });

    this.isAddStockMode = false;
  }

}
