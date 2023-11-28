import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.scss'
})
export class LeaveDetailsComponent implements OnInit {
    leaveId = '';
    createdBy = '';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
      this.route.params.subscribe(param =>{
        this.leaveId = param["id"];
      })
  }
}
