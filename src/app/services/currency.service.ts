import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, forkJoin} from "rxjs";

const apiLink = 'https://v6.exchangerate-api.com/v6/dde4fa9f19f23331bdb99d19/latest'
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) {
  }

  async getExchangeRates() {
     const [uah, usd, eur, pln] = await firstValueFrom(forkJoin([
       this.httpClient.get <any>(apiLink + `/UAH`),
       this.httpClient.get <any>(apiLink + `/USD`),
       this.httpClient.get <any>(apiLink + `/EUR`),
       this.httpClient.get <any>(apiLink + `/PLN`)
       ]
     ))
    return {uah: uah.conversion_rates,
      usd: usd.conversion_rates,
      eur: eur.conversion_rates,
      pln: pln.conversion_rates,
    }
  }
}
