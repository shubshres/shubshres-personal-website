import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AvaComponent } from '../project-pop-ups/ava/ava.component';
import { BinBuddyComponent } from '../project-pop-ups/bin-buddy/bin-buddy.component';
import { CarRentalDatabaseComponent } from '../project-pop-ups/car-rental-database/car-rental-database.component';
import { StockAlertComponent } from '../project-pop-ups/stock-alert/stock-alert.component';
import { TeachingToddlersComponent } from '../project-pop-ups/teaching-toddlers/teaching-toddlers.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openBinBuddy(): void {
    const dialogRef = this.dialog.open(BinBuddyComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }

  openAva(): void {
    const dialogRef = this.dialog.open(AvaComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }

  openCarRentalDatabase(): void {
    const dialogRef = this.dialog.open(CarRentalDatabaseComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }

  openStockAlert(): void {
    const dialogRef = this.dialog.open(StockAlertComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }

  openTeachingToddlers(): void {
    const dialogRef = this.dialog.open(TeachingToddlersComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }
}
