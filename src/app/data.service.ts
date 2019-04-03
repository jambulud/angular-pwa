import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myThaiStarDishes = 'http://de-mucdevondepl01:8090/api/services/rest/dishmanagement/v1/dish/search';

  constructor(private http: HttpClient) { }

  getDishes() {
    return this.http.post(
      this.myThaiStarDishes,
      {
        categories: [],
        searchBy: '',
        pageable: {
          pageSize: 8,
          pageNumber: 0
        },
        maxPrice: null,
        minLikes: null,
      });
  }
}
