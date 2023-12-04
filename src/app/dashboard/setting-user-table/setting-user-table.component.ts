import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  date_created: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Emily Fiagbedze',
    date_created: '27/03/2023',
    position: 'super admin',
  },
  {
    id: 2,
    name: 'Luckey Dogbe',
    date_created: '27/03/2023',
    position: 'admin',
  },
  { id: 3, name: 'Lady Omega', date_created: '27/03/2023', position: 'staff' },
  { id: 4, name: 'Lade Ojesanmi', date_created: '27/03/2023', position: 'EIT' },
  {
    id: 5,
    name: 'Keziah Keziah',
    date_created: '27/03/2023',
    position: 'staff',
  },
  {
    id: 6,
    name: 'Bright Ahedor',
    date_created: '27/03/2023',
    position: 'staff',
  },
  {
    id: 7,
    name: 'Bright Ahedor',
    date_created: '27/03/2023',
    position: 'staff',
  },
  {
    id: 8,
    name: 'Kaba Mohammadu',
    date_created: '27/03/2023',
    position: 'staff',
  },
  { id: 9, name: 'Lady Omega', date_created: '27/03/2023', position: 'staff' },
  {
    id: 10,
    name: 'Afi Ohui K.',
    date_created: '27/03/2023',
    position: 'staff',
  },
];

@Component({
  selector: 'app-settings-user-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './setting-user-table.component.html',
  styleUrl: './setting-user-table.component.scss',
})
export class SettingsUserTableComponent {
  displayedColumns: string[] = ['id', 'name', 'date_created', 'position'];
  dataSource = ELEMENT_DATA;
}
