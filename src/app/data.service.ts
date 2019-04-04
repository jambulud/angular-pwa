import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myThaiStarDish = 'http://de-mucdevondepl01:8090/api/services/rest/dishmanagement/v1/dish/1';

  constructor(private http: HttpClient) { }

  getDishes() {
    return this.http.get(
      this.myThaiStarDish,
    );
  }
}
