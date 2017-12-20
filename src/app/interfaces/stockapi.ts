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




