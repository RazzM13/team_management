import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { EdititemComponent } from '../edititem/edititem.component';
import { EchipeService } from '../echipe.service';

export interface PeriodicElement {
  STATUS: string;
  ID_ECHIPA: number;
  DENUMIRE: string;
  ACTIV: boolean;
  DATA_CREARE: string;
  UTILIZATOR_CREARE: number;
  DATA_MODIFICARE: string | null;
  UTILIZATOR_MODIFICARE: string | null;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     "STATUS": "ACTIV",
//     "ID_ECHIPA": 2018,
//     "DENUMIRE": "testlc",
//     "ACTIV": true,
//     "DATA_CREARE": "2023-01-04T15:47:22.821Z",
//     "UTILIZATOR_CREARE": 1,
//     "DATA_MODIFICARE": null,
//     "UTILIZATOR_MODIFICARE": null
//   },
// ];
// for (let index = 0; index < 100; index++) {
//   const x = Object.assign({}, ELEMENT_DATA[0]);
//   x['ID_ECHIPA'] += index;
//   ELEMENT_DATA.push(x);
// }

const ELEMENT_DATASOURCE = new MatTableDataSource([]);

@Component({
  selector: 'app-echipe',
  templateUrl: './echipe.component.html',
  styleUrls: ['./echipe.component.css'],
})
export class EchipeComponent implements AfterViewInit {
  dataSource = ELEMENT_DATASOURCE;
  displayedColumns: string[] = [
    'STATUS', 'ID_ECHIPA','DENUMIRE','ACTIV','DATA_CREARE','UTILIZATOR_CREARE','DATA_MODIFICARE','UTILIZATOR_MODIFICARE'
  ];

  showFiller = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private echipeService: EchipeService) {
    this.loadData();
  }

  loadData() {
    this.echipeService.list().subscribe(r => this.dataSource.data = (r as any)['DATA']);
  }

  openDialog(entity = {}) {
    const dialogRef = this.dialog.open(EdititemComponent, {
      data: entity
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
