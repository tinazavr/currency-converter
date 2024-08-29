import {Component, Input} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {CurrencyOption} from "../../types/currency-option";
import {ExchangeRateMap} from "../../types/exchange-rate-map";

@Component({
  selector: 'app-currency-conversion',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgIf],
  templateUrl: './currency-conversion.component.html',
  styleUrl: './currency-conversion.component.scss'
})
export class CurrencyConversionComponent {
  @Input({required: true}) exchangeRate!: ExchangeRateMap;
  convertFromValue :number | undefined;
  convertToValue :number | undefined;
  currencyFrom : CurrencyOption = "usd";
  currencyTo : CurrencyOption = "uah";
  currency: CurrencyOption[] = ['usd', 'eur','pln', 'uah'];

  onConvertFromChange() {
    if(typeof this.convertFromValue !== "undefined") {
      this.convertToValue = this.convertFromValue * this.exchangeRate[this.currencyFrom][this.currencyTo.toUpperCase()];
    }}

  onConvertToChange() {
    if(typeof this.convertToValue !== "undefined") {
    this.convertFromValue = this.convertToValue * this.exchangeRate[this.currencyTo][this.currencyFrom.toUpperCase()];
  }}
}
