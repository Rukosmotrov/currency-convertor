import { ICurrencyInterface, IRatesInterface } from './../../interfaces.ts/currencyInterface';
import {Component, OnInit} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CurrencyService } from "src/app/services/currency.service";

@Component({
    selector: 'currency-input',
    templateUrl: './currency-input.component.html',
    styleUrls: ['./currency-input.component.scss']
})

export class CurrencyInputComponent implements OnInit {
    constructor(private currencyService: CurrencyService) { }

    currencies: IRatesInterface[] = [{
        base_value: 'USD',
        values: [],
        rates: {},
        input_value: ''
    }, {
        base_value: 'EUR',
        values: [],
        rates: {},
        input_value: ''
    }];

    ngOnInit(): void {
        this.currencies.forEach(item => {
            this.currencyService.getCurrency(item.base_value).subscribe(res => {
                item.rates = res;
                item.values = Object.keys(res.conversion_rates);
            });
        })
    }

    getRates(index: number) {
        if(index === 0) {
            this.currencies[1].input_value = String((Number(this.currencies[0].input_value) * 
            this.currencies[0].rates.conversion_rates[this.currencies[1].base_value]).toFixed(2))
        } else {
            this.currencies[0].input_value = String((Number(this.currencies[1].input_value) * 
            this.currencies[1].rates.conversion_rates[this.currencies[0].base_value]).toFixed(2))
        }
    }

    onCurrencyChange(index: number, currency: string) { 
        this.currencyService.getCurrency(currency).subscribe(res => {
            this.currencies[index].rates = res;
            this.getRates(index);
        });
        this.currencies[index].base_value = currency;
    }
}