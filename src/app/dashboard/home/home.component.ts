import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public series: any[] = [
    {
      name: 'Requests',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 68, 78, 23],
    },
    {
      name: 'Attendance',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 92, 88],
    },
  ];

  public chart: any = {
    type: 'bar',
    height: 350,
  };

  public title: any = {
    text: 'Basic Column Chart',
    align: 'left',
  };
}
