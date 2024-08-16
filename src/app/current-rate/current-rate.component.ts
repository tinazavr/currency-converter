import {Component} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyRate} from "../currency-rate";
import {CurrencyService} from "../currency.service";

@Component({
  selector: 'app-current-rate',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './current-rate.component.html',
  styleUrl: './current-rate.component.scss'
})
export class CurrentRateComponent {
  displayedColumns: string[] = ['what-to-do', 'usd', 'eur', 'pln'];
  dataSource: CurrencyRate[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  async ngOnInit() {
    const data = await this.currencyService.getExchangeRates()
    this.dataSource = [{
      whatToDo: "Buy", usd: data.usd.UAH, eur: data.eur.UAH, pln: data.pln.UAH
    }, {
      whatToDo: "Sell",
      usd: Math.round(data.usd.UAH * 1.01 * 100) / 100,
      eur: Math.round(data.eur.UAH * 1.01 * 100) / 100,
      pln: Math.round(data.pln.UAH * 1.01 * 100) / 100
    },]
  }
}
