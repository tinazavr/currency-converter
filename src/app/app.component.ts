import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrentRateComponent} from "./current-rate/current-rate.component";
import {CurrencyConversionComponent} from "./currency-conversion/currency-conversion.component";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentRateComponent, CurrencyConversionComponent],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
