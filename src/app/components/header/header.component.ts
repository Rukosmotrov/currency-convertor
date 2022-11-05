import { ICurrencyInterface } from './../../interfaces.ts/currencyInterface';
import { tap } from 'rxjs';
import { CurrencyService } from './../../services/currency.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(public currencyService: CurrencyService) { }

    headerCurrencies = ['USD', 'EUR'];
    rates: ICurrencyInterface[] = [];

    ngOnInit(): void {
        this.headerCurrencies.forEach(currency => {
            this.currencyService.getCurrency(currency).subscribe(res => this.rates.push(res));
        })
    }


}