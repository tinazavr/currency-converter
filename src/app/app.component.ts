import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrentRateComponent} from "./components/current-rate/current-rate.component";
import {CurrencyConversionComponent} from "./components/currency-conversion/currency-conversion.component";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {CurrencyService} from "./services/currency.service";
import {NgIf} from "@angular/common";
import {ExchangeRateMap} from "./types/exchange-rate-map";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentRateComponent, CurrencyConversionComponent, NgIf],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  exchangeRate?: ExchangeRateMap;
  constructor(private currencyService: CurrencyService) {
  }
  async ngOnInit() {
    this.exchangeRate = await this.currencyService.getExchangeRates()
    console.log(this.exchangeRate)
  }
}
