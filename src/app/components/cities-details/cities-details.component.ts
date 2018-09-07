import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface CitiesDetails {
  newcity: {
    id: number;
    name: string;
    admin_area: string;
  },
  historical: {
    id: number;
    name: string;
    admin_area: string;
    country: string;
  }
}

@Component({
  selector: 'app-cities-details',
  templateUrl: './cities-details.component.html',
  styleUrls: ['./cities-details.component.css']
})
export class CitiesDetailsComponent{

  constructor(public dialogRef: MatDialogRef<CitiesDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CitiesDetails) { }

  private closeDialog()
  {
    this.dialogRef.close();
  }
}
