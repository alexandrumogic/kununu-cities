import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CitiesDetailsComponent } from '../cities-details/cities-details.component';

@Component({
  selector: 'historical-autocomplete',
  templateUrl: './historical-autocomplete.component.html',
  styleUrls: ['./historical-autocomplete.component.css']
})
export class HistoricalAutocompleteComponent implements OnInit {

  @Input() newCityDetails;
  private form;
  private historicalCities;

  constructor(private apiService: ApiService, public citiesDetailsDialog: MatDialog) { }

  ngOnInit() {
    this.form = new FormControl('');

    this.form.valueChanges.subscribe(val => {
      this.apiService.getCity(val).subscribe(city => {
        this.historicalCities = city;
      });
    })
  }

  private showDetails(historicalCityDetails)
  {
    const dialogRef = this.citiesDetailsDialog.open(CitiesDetailsComponent, {
      data: {
        newcity: {
          id: this.newCityDetails.id,
          name: this.newCityDetails.name,
          admin_area: this.newCityDetails.admin_area
        },
        historical: {
          id: historicalCityDetails.id,
          name: historicalCityDetails.name,
          admin_area: historicalCityDetails.admin_area,
          country: historicalCityDetails.country
        }
      }
    });
  }
}
