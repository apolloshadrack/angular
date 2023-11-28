import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
  leaves = [
      {
        id: 1, 
        leave_type: "Maternity", 
        start_date:"Dec 20, 2023", 
        end_date: "Mar 20,2024",
        created_by: "Apollo",
        status: "PENDING",
        last_modified: "Nov 27, 2023",
        status_changed_by: "Derek"
      },
      {
        id: 2, 
        leave_type: "Baecation", 
        start_date:"Dec 20, 2023", 
        end_date: "Jan 09,2024",
        created_by: "Suad",
        status: "PENDING",
        last_modified: "Nov 30, 2023",
        status_changed_by: "Emily"
      }
  ];
}
