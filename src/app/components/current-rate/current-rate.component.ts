import {Component, Input, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyRate} from "../../types/currency-rate";
import {ExchangeRateMap} from "../../types/exchange-rate-map";
import {CurrencyOption} from "../../types/currency-option";

@Component({
  selector: 'app-current-rate',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './current-rate.component.html',
  styleUrl: './current-rate.component.scss'
})
export class CurrentRateComponent implements OnInit {
  @Input() exchangeRate !: ExchangeRateMap;
  displayedColumns: string[] = ['what-to-do', 'usd', 'eur', 'pln'];
  dataSource: CurrencyRate[] = [];

  async ngOnInit() {
    this.dataSource = [{
      whatToDo: "Buy",
      usd: this.exchangeRate.usd['UAH'],
      eur: this.exchangeRate.eur['UAH'],
      pln: this.exchangeRate.pln['UAH']
    }, {
      whatToDo: "Sell",
      usd: this.calculateSellRate('usd'),
      eur: this.calculateSellRate('eur'),
      pln: this.calculateSellRate('pln')
    },]
  }

  private calculateSellRate(currency: CurrencyOption) {
    return (Math.round(this.exchangeRate[currency]['UAH'] * 1.01 * 100) / 100)
  }
}
