import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty'

@Injectable()
export class ApiService {

  private API_BASE_URL = "http://0.0.0.0:8080";
  private API_CITIES_URL = this.API_BASE_URL + "/v1/cities";
  private API_AUTOCOMPLETE_URL = this.API_BASE_URL + "/v1/autocomplete";

  constructor(private http: HttpClient) {}

  public getListOfNewCities()
  {
    return this.http.get(this.API_CITIES_URL);
  }

  public getCity(query)
  {
    if (query !== "")
    {
      return this.http.get(this.API_AUTOCOMPLETE_URL, {
        params: {
          q : query
        }
      });
    }
    return Observable.empty<Response>();
  }
}
