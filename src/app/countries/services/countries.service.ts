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

  searchByCountry(term: string): Observable<Country[]> {
    const countryUrl = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(countryUrl)
      .pipe(
        // tap(countries => console.log(countries)),
        // map((countries) => [])
        catchError((err) => {
          console.log('Error:', err);
          return of([])
        })
      )
  }

  searchByRegion(term: string): Observable<Country[]> {
    const regionUrl = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(regionUrl)
      .pipe(
        // tap(countries => console.log(countries)),
        // map((countries) => [])
        catchError((err) => {
          console.log('Error:', err);
          return of([])
        })
      )
  }

  searchByCode(code: string): Observable<Country | null> {
    const codeUrl = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(codeUrl)
      .pipe(
        map((countries) => {
          if (countries.length > 0) {
            return countries[0]
          }
          return null
        }),
        // tap(countries => console.log(countries)),
        // map((countries) => [])
        catchError((err) => {
          console.log('Error:', err);
          return of(null)
        })
      )
  }

}
