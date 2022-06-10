import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTitle() {
    return this.http.get(this.URL, {responseType: 'text'});
  }

  getPersons() {
    return this.http.get(this.URL + '/personnes');
  }


}
