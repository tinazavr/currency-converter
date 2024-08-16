import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {CurrencyService} from "../currency.service";

interface CurrencySelection {
  value: string;
  viewValue: string;
}
type CurrencyOption = "usd" | "pln" | "eur" | "uah";
@Component({
  selector: 'app-currency-conversion',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgIf],
  templateUrl: './currency-conversion.component.html',
  styleUrl: './currency-conversion.component.scss'
})
export class CurrencyConversionComponent {
  exchangeRate: any = {};
  convertFromValue :number | null  = null;
  convertToValue :number | null = null;
  currencyFrom : CurrencyOption = "usd";
  currencyTo : CurrencyOption = "uah";


  currency: CurrencyOption[] = ['usd', 'eur','pln', 'uah'];


  onConvertFromChange(change: number) {
    this.convertToValue = change * this.exchangeRate[this.currencyFrom][this.currencyTo.toUpperCase()];
  }

  onConvertToChange(change: number) {
    this.convertFromValue = change * this.exchangeRate[this.currencyTo][this.currencyFrom.toUpperCase()];
  }

  constructor(private currencyService: CurrencyService) {
  }
  async ngOnInit() {
    this.exchangeRate = await this.currencyService.getExchangeRates()
    console.log(this.exchangeRate)
  }
}
