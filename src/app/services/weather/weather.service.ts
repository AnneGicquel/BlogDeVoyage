import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ILocationResponse{
// en suivant le modele JSON de l'API
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset:number;
  description: string;
  days: [
    {
      temp:number;
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = environment.weatherApi.url
  apiToken = environment.weatherApi.token

  // appeler le HttpClient 
  constructor(private httpClient:HttpClient) { }


    /* en paramètre city -> ville dont on veut la température.
    retourne un objet de type Observable<ILocationResponse>, permettant de gérer les réponses HTTP.*/

    getLocationTemp(city: string):Observable<ILocationResponse>{
        const url = `${this.apiUrl}/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=${this.apiToken}&contentType=json`
        // verif
        console.log('pleassseeee')
        console.log('estttt', url)
        return this.httpClient.get<ILocationResponse>(url); 
    }
  
}
