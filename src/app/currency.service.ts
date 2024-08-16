import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) {
  }

  getExchangeRates() {
    return this.httpClient.get <any
    >(`https://v6.exchangerate-api.com/v6/dde4fa9f19f23331bdb99d19/latest/UAH`)
  }
}
