import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  public API = '//localhost:8080';
  public travel_API = this.API + '/travelDate';

  constructor(private http: HttpClient) {
  }

  get(timefrom: string,timeto:string) {
    console.log(timefrom,timeto);
  var travelDateToFrom=   [timefrom,timeto].join("+");
    return this.http.post(this.travel_API + '/' , travelDateToFrom);
  }
}
