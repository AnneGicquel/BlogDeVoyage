import { Component, Input } from '@angular/core';
import { ILocationResponse, WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // déclarations
  dataTemp!: number;
  dataLocation!: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    // getLocationTemp -> objet typé:Observable<ILocationResponse> -> réponse de l'API
    this.weatherService.getLocationTemp("Uyuni").subscribe((next) => {
      // subscribe() prend en paramètre une fonction de rappel (callback) appelée lorsque la réponse de l'API est dispo.
      // objet next -> réponse de l'API de type ILocationResponse.
      this.dataTemp! = next.days[0].temp;
      this.dataLocation! = next.address;
      // affecte next à city
      console.log('alors....?')
    })
  }

  // @Input() temp!: ILocationResponse;

}
