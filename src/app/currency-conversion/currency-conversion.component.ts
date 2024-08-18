import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {CurrencyService} from "../currency.service";

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
  convertFromValue :number | undefined;
  convertToValue :number | undefined;
  currencyFrom : CurrencyOption = "usd";
  currencyTo : CurrencyOption = "uah";


  currency: CurrencyOption[] = ['usd', 'eur','pln', 'uah'];


  onConvertFromChange() {
    if(typeof this.convertFromValue !== "undefined") {
      console.log(this.convertFromValue , this.currencyFrom);
      this.convertToValue = this.convertFromValue * this.exchangeRate[this.currencyFrom][this.currencyTo.toUpperCase()];
    }}

  onConvertToChange() {
    if(typeof this.convertToValue !== "undefined") {
    this.convertFromValue = this.convertToValue * this.exchangeRate[this.currencyTo][this.currencyFrom.toUpperCase()];
  }}

  constructor(private currencyService: CurrencyService) {
  }
  async ngOnInit() {
    this.exchangeRate = await this.currencyService.getExchangeRates()
    console.log(this.exchangeRate)
  }
}
