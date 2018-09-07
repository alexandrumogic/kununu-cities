import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HistoricalAutocompleteComponent } from '../historical-autocomplete/historical-autocomplete.component';

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  private citiesList;

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getListOfNewCities().subscribe(
      cities => { this.citiesList = cities });
  }

}
