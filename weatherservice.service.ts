import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { 
    getWeatherData(cityName: String):Observable<WeatherData>
    {
       return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIValue)
        .set(environment.XrapidApiKeyHeaderName,environment.XRapidApiKeyValue)
        params: new HttpParams()
        .set('q',cityName)
        .set('units','metric')
        .set('node','json')
      })
    }
  }
}
function getWeatherData(cityName: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

