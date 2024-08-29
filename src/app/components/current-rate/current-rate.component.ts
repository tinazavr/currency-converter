import {Component, Input, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyRate} from "../../types/currency-rate";

@Component({
  selector: 'app-current-rate',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './current-rate.component.html',
  styleUrl: './current-rate.component.scss'
})
export class CurrentRateComponent implements OnInit{
  @Input() exchangeRate : any;
  displayedColumns: string[] = ['what-to-do', 'usd', 'eur', 'pln'];
  dataSource: CurrencyRate[] = [];

  async ngOnInit() {
    this.dataSource = [{
      whatToDo: "Buy", usd: this.exchangeRate.usd.UAH, eur: this.exchangeRate.eur.UAH, pln: this.exchangeRate.pln.UAH
    }, {
      whatToDo: "Sell",
      usd: Math.round(this.exchangeRate.usd.UAH * 1.01 * 100) / 100,
      eur: Math.round(this.exchangeRate.eur.UAH * 1.01 * 100) / 100,
      pln: Math.round(this.exchangeRate.pln.UAH * 1.01 * 100) / 100
    },]
  }
}
