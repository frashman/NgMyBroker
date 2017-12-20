// https://www.cryptonator.com/api/currencies

export interface ICurrency {
    code: string;
    name: string;
    statuses: string[];
}

export interface ICurrencies {
    rows: ICurrency[];
}


// https://api.cryptonator.com/api/ticker/btc-usd

export interface ITicker {
    base: string;
    target: string;
    price: string;
    volume: string;
    change: string;
}

export interface ITickerRequest {
    ticker: ITicker;
    timestamp: number;
    success: boolean;
    error: string;
    foo: string;
}
