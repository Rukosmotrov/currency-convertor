export interface ICurrencyInterface {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: any;
}

export interface IRatesInterface {
    base_value: string;
    values: string[];
    rates: any;
    input_value: string;
}