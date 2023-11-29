import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public code: string = '';
  public country?: Country;
  constructor(private activatedRoute: ActivatedRoute, private countriesService: CountriesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.code = params['id'];
    })

    this.countriesService.searchByCode(this.code).subscribe(
      country => {
        if (!country) {
          this.router.navigateByUrl('');
          return;
        }
        return this.country = country;
      }
    )
  }

}
