import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {

  }

  searchByCapital(term: string): Observable<Country[]> {
    const capitalUrl = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(capitalUrl)
      .pipe(
        // tap(countries => console.log(countries)),
        // map((countries) => [])
        catchError((err) => {
          console.log('Error:', err);
          return of([])
        })
      )
  }

}
