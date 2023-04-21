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

  // de type de l'interface du service
  city!: ILocationResponse;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    // getLocationTemp -> objet typé:Observable<ILocationResponse> -> réponse de l'API
    this.weatherService.getLocationTemp("Uyuni").subscribe((next) => {
      // subscribe() prend en paramètre une fonction de rappel (callback) appelée lorsque la réponse de l'API est dispo.
      // objet next -> réponse de l'API de type ILocationResponse.
      this.city! = next;
      // affecte next à city
      console.log('alors....?')
    })
  }
}
