export interface IQuote {
    symbol: string;
    name: string;
    change: string;
    currency: string;
    lastTradeDate: string;
    lastTradePriceOnly: string;
    changeinPercent: string;
    lastTradeTime: string;
}

export interface IQuotes {
    quote: IQuote[];
}

export interface IQuery {
    count: number;
    created: Date;
    lang: string;
    results: IQuotes;
}

export interface IRootObject {
    query: IQuery;
}

export class Quote implements IQuote {
    symbol: string;
    name: string;
    change: string;
    currency: string;
    lastTradeDate: string;
    lastTradePriceOnly: string;
    changeinPercent: string;
    lastTradeTime: string;
}

export class Quotes implements IQuotes {
    quote: IQuote[] = [];
}

export class Query implements IQuery {
    count: number;
    created: Date;
    lang: string;
    results: IQuotes = new Quotes();
}

export class RootObject implements IRootObject {
    query: IQuery = new Query();
}



