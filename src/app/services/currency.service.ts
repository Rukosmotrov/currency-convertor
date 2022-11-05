import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { catchError, delay, Observable, retry, tap, throwError } from "rxjs";
import { ICurrencyInterface } from "../interfaces.ts/currencyInterface";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {
    constructor(private http: HttpClient) { }
    
    getCurrency(currency: string) {
        return this.http.get<ICurrencyInterface>(`https://v6.exchangerate-api.com/v6/b59539d6c8b3bd0e2b771f50/latest/${currency}`)
    }
}