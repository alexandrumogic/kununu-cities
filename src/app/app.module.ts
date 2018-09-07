import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule, MatSelectModule, MatDialogModule} from '@angular/material';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { HistoricalAutocompleteComponent } from './components/historical-autocomplete/historical-autocomplete.component';
import { CitiesDetailsComponent } from './components/cities-details/cities-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    HistoricalAutocompleteComponent,
    CitiesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [CitiesDetailsComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
