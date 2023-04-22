import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILocationResponse, WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;

}
